(n.r(t), n.d(t, { default: () => pt }));
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
    g = n(97893),
    p = n(364522),
    x = n(297264),
    v = n(834730),
    j = n(65593),
    b = n(458518),
    y = n(742589),
    w = n(152367),
    k = n(661531),
    N = n(866665),
    C = n(939249),
    A = n(497183),
    S = n(248675),
    E = n(105292),
    I = n(631417);
function _(e) {
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
                (0, a.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: k.A.colors.ICON_STRONG,
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
var M = n(120234),
    T = n(639519),
    P = n(319481),
    R = n(371169);
let L = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    $ = { tier: "balanced" },
    D = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
async function O(e) {
    let { guildId: t, installScope: n, prompt: l, modelSettings: r, templateId: a } = e,
        i = await (0, R.gA)(
            null != n
                ? { guild_id: t, install_scope: n }
                : { guild_id: t, auto_install_scope: !0, prompt: (l ?? "").slice(0, 4e3) },
        );
    return ((0, P.ensureConnection)(i, { templateId: a }), (0, P.stageModelSettings)(i, r ?? $), i);
}
var q = n(652215),
    z = n(746080);
async function F(e) {
    let { start: t, ...n } = e,
        l = await O(n);
    return (await t(l), (0, u.pX)(q.BVt.CHANNEL(n.guildId, z.VV.CONJURE, l)), l);
}
var U = n(941985),
    G = n(506774);
let B = "ConjureProjectsPanelOpen";
var K = n(636537),
    H = n(73153),
    V = n(195880);
function W(e, t) {
    H.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
var X = n(245179),
    Y = n(435558),
    Z = n.n(Y);
let J = "ConjureComposerDrafts";
function Q() {
    return G.w.get(J) ?? {};
}
let ee = new Map(),
    et = Z().throttle(() => {
        if (0 === ee.size) return;
        let e = Q();
        for (let [t, n] of ee) "" === n ? delete e[t] : (e[t] = n);
        (ee.clear(), G.w.set(J, e));
    }, 1e3);
class en extends o.Ay.Store {
    getDraft(e) {
        let t = ee.get(e);
        return null != t ? t : (Q()[e] ?? "");
    }
}
let el = new en(H.h, {
    LOGOUT: function () {
        return (ee.clear(), et.cancel(), G.w.remove(J), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ee.set(t, n), et(), "" === n && et.flush(), !1);
    },
});
(n(323874), n(14289), n(35956));
var er = n(839214),
    ea = n(666476),
    ei = n(989145);
let es = [],
    eo = 1,
    eu = (0, er.D)(() => ({ draftsByProject: {} }));
function ec(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? es;
}
function ed(e, t) {
    return ec(eu.getState(), e, t);
}
function em(e, t, n) {
    let { draftsByProject: l } = eu.getState();
    eu.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function ef(e, t, n, l) {
    let r = ed(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (em(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function eh(e, t) {
    (0, ei.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function eg(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && eh(e, t.ref.id));
}
function ep(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = eu.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? es) n ? eg(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    eu.setState({ draftsByProject: i });
}
function ex(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, ea.sM)((0, ea.Ju)(e)) });
}
function ev(e, t, n) {
    if (0 === n.length) return;
    let l = n.map((e) => {
        let { draft: t, upload: n } = e;
        return { draft: { ...t, localId: eo++ }, upload: n };
    });
    for (let { draft: n, upload: r } of (em(e, t, [
        ...ed(e, t),
        ...l.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    l))
        r?.().then(
            (l) => {
                if ("errorText" in l) return void ef(e, t, n.localId, { status: "error", errorText: l.errorText });
                let { converted: r, ...a } = l;
                ef(e, t, n.localId, { ...r, status: "ready", ref: a })
                    ? setTimeout(
                          () => ef(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                          ea.o2 - 3e5,
                      )
                    : eh(e, a.id);
            },
            (l) => {
                (console.error("[conjure] attachment upload failed", l),
                    ef(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
            },
        );
}
function ej(e, t) {
    let n = ed(e, t);
    if (0 !== n.length) {
        for (let t of n) eg(e, t);
        em(e, t, es);
    }
}
function eb(e, t) {
    let n = ed(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (em(e, t, es), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function ey(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = ed(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? eb(e, "chat") : [];
    (0, P.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(H.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eu.getState().draftsByProject)) ep(e, { deleteFromWorker: !0 });
}),
    H.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ep(t, { deleteFromWorker: !1 });
    }));
var ew = n(975189),
    ek = n(260498);
let eN = "ConjureHeldPrompts",
    eC = new Map(),
    eA = new Map();
function eS(e, t) {
    let n =
        eC.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (eC.delete(e), t);
            }
        })();
    return (eC.set(e, n), n);
}
function eE() {
    return G.w.get(eN) ?? {};
}
function eI(e) {
    let { [e]: t, ...n } = eE();
    G.w.set(eN, n);
}
function e_(e, t, n) {
    (eI(e),
        (0, P.withdrawUserMessage)(e, t.nonce),
        "" === el.getDraft(e) && W(e, t.message),
        0 === ed(e, "chat").length &&
            ev(
                e,
                "chat",
                t.attachments.map((e) => ({
                    draft: { name: e.name, contentType: e.content_type, status: "ready", ref: e },
                })),
            ),
        n());
}
function eM(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: E.intl.string(S.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function eT(e) {
    return {
        id: e.id,
        questions: e.questions.map((e) => ({
            id: e.id,
            question: e.question,
            recommendation_reason: "",
            options: [],
            allow_custom: !1,
            note: E.intl.string(S.default.ZKPaWY),
        })),
    };
}
async function eP(e, t, n) {
    let l = await K.Bo.put({
        url: `${q.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    H.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: l.body });
}
var eR = n(89310),
    eL = n(821609),
    e$ = n(775602),
    eD = n(486020),
    eO = n(687966),
    eq = n(323384),
    ez = n(632015),
    eF = n(231483),
    eU = n(430392);
let eG = {
    games: eO.GameControllerIcon,
    apps: eq.k,
    profile_widget: ez.f,
    automod: eF.ShieldIcon,
    chat_bot: eU.RobotIcon,
};
var eB = n(621466);
let eK = "data-conjure-carousel-card";
var eH = n(19493);
let eV = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = eG[t.category];
        return (0, a.jsxs)("li", {
            className: eH.AS,
            [eK]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: eH.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: eH.my,
                            src: (0, eD.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: eH.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eH.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eH.xn,
                            children: [
                                (0, a.jsx)("img", { className: eH.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: eH.o1,
                                    children: (0, a.jsx)(eL.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eH.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eH.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: k.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: eH.PJ,
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
    eW = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
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
                    g = document.hasFocus(),
                    p = !0;
                function x() {
                    null != e &&
                        null != n &&
                        ((r = (l = Array.from(n.querySelectorAll(`[${eK}]`))).map(
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
                    let e = t && !f && !h && g && p;
                    e && 0 === d
                        ? ((m = null), (d = requestAnimationFrame(j)))
                        : e || 0 === d || (cancelAnimationFrame(d), (d = 0));
                }
                function y() {
                    ((f = !0), b());
                }
                function w() {
                    ((f = !1), b());
                }
                function k() {
                    ((h = !0), b());
                }
                function N(t) {
                    ((h = (0, eB.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
                }
                function C() {
                    ((g = !0), b());
                }
                function A() {
                    ((g = !1), b());
                }
                (x(), v(), b());
                let S = new ResizeObserver(() => {
                    (x(), v());
                });
                (S.observe(e), S.observe(n));
                let E = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((p = t.isIntersecting), b());
                });
                return (
                    E.observe(e),
                    e.addEventListener("scroll", v, { passive: !0 }),
                    e.addEventListener("pointerenter", y),
                    e.addEventListener("pointerleave", w),
                    e.addEventListener("focusin", k),
                    e.addEventListener("focusout", N),
                    window.addEventListener("focus", C),
                    window.addEventListener("blur", A),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            E.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", w),
                            e.removeEventListener("focusin", k),
                            e.removeEventListener("focusout", N),
                            window.removeEventListener("focus", C),
                            window.removeEventListener("blur", A));
                    }
                );
            }, [s, u, t]),
            (0, a.jsx)("section", {
                ref: s,
                className: r ? eH.vV : eH.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: eH.u4,
                    children: n.map((e) => (0, a.jsx)(eV, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var eX = n(858899),
    eY = n(789645),
    eZ = n(265872),
    eJ = n(980707),
    eQ = n(477782),
    e0 = n(81369),
    e1 = n(77729),
    e2 = n(723702),
    e3 = n(264572).Buffer;
async function e4(e, t) {
    if (e2.isPlatformEmbedded) {
        let n = e3.from(await e.arrayBuffer());
        if ("function" == typeof e1.A.fileManager.saveWithDialog2) await e1.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await e1.A.fileManager.saveWithDialog(n, t);
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
var e5 = n(688954);
class e7 extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function e6(e, t) {
    let n = await (0, e5.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new e7(n.status);
    return await n.blob();
}
async function e8(e, t, n) {
    (0, P.ensureConnection)(e);
    let l = await (0, ei.vX)(e, t);
    (0, P.sendUserMessage)(e, n, [l]);
}
function e9(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ea.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, ea.sM)((0, ea.Ju)(t)) });
}
async function te(e, t) {
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
        r = await e6(e, l);
    await e4(r, l);
}
function tt(e) {
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
var tn = n(950305),
    tl = n(664121);
let tr = [
    { value: "user", icon: tn.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: tl.R, nameMessage: S.default.LlLIJw },
];
function ta(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = tt(i.useCallback((e) => n(e, "user"), [n])),
        s = tt(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eZ.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: eZ.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eJ.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eQ.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: tr
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eQ.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(eL.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: e0.H,
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
var ti = n(418811),
    ts = n(246338),
    to = n(902687),
    tu = n(442433),
    tc = n(314116),
    td = n(782603),
    tm = n(780338),
    tf = n(782134),
    th = n(113494),
    tg = n(12470),
    tp = n(811893),
    tx = n(663417),
    tv = n(70688),
    tj = n(92446),
    tb = n(173936),
    ty = n(473935),
    tw = n(625903),
    tk = n(408278),
    tN = n(365199),
    tC = n(7437),
    tA = n(147036),
    tS = n(957565),
    tE = n(785389),
    tI = n(123917),
    t_ = n(860402);
let tM = new Set();
var tT = n(893067),
    tP = n(442331),
    tR = n(616334);
n(321073);
var tL = n(189714),
    t$ = n(733791),
    tD = n(189213),
    tO = n(331322),
    tq = n(192308),
    tz = n(664619),
    tF = n(706935);
function tU(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, t$.fI)(n) : (0, t$.Kd)(n),
        g = f ? null : (0, t$.L4)(n),
        p = (0, t$.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, R.xx)(t.id) : (0, tz.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, eX.P0)({ text: (0, t$.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tD.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, t$.WX)((0, tF.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, t$.J)(n) : E.intl.string(S.default["8OKM1N"]),
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
        children: (0, a.jsxs)(tO.B, {
            gap: 12,
            children: [
                h.length > 0 || null != g
                    ? (0, a.jsx)(tF.Ay, {
                          items: h,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != p ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: p }) : null,
            ],
        }),
    });
}
function tG(e) {
    (0, tq.openModal)((t) => (0, a.jsx)(tU, { ...t, ...e }));
}
var tB = n(587895);
function tK(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([tB.A], () => tB.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, tz.R_)(t.id);
        (r(!1), e)
            ? ((0, eX.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(tD.a, {
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
var tH = n(552821);
let tV = [];
function tW(e) {
    (0, eX.P0)({ text: e, variant: "critical" });
}
function tX(e) {
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
            onRefresh: g,
            isRefreshing: p = !1,
            onTogglePreviewPaused: x,
            previewPaused: v = !1,
            previewPauseDisabled: j = !1,
            onTogglePopout: b,
            poppedOut: y = !1,
            onToggleDebug: w,
            debugOpen: k = !1,
            onClose: N,
            refreshApplicationId: C,
            previewProjectId: A,
            onCloseMenu: I,
        } = e,
        _ = (0, tL.iI)(t),
        M = i.useContext(tT.bI),
        { pending: T, refresh: P } = (0, tC.A)(C ?? null),
        { pending: L, connect: $ } = (function (e, t) {
            let [n, l] = i.useState(tM),
                r = i.useRef(tM),
                a = i.useCallback((e) => {
                    ((r.current = (0, tE.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, tE.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, t_.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tI.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tE.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(A ?? null, tW),
        D = (0, o.bG)([tP.A], () => (null == A ? tV : tP.A.getDeclaredConnections(A))),
        O = i.useMemo(() => (0, tE.Xl)(D), [D]),
        q = (0, t$.Bs)(t),
        F = (0, t$.CU)(t) && s,
        U = (0, o.bG)(
            [ek.Ay],
            () => {
                let e = ek.Ay.getProject(t);
                return null != e && (0, ek.jf)(e);
            },
            [t],
        ),
        G = (function (e) {
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
        })({ canRefresh: null != C, refreshPending: T, offers: O, connectPending: L }),
        B = i.useMemo(() => new Map(D.map((e) => [e.type, e])), [D]),
        K = null != m && u,
        H = s && null != d,
        V = K || null != c || H || null != f || null != h,
        W = tS.p5 && null != l,
        X = tS.p5,
        Y = _ ? td.BellIcon : tm.BellSlashIcon,
        Z = v ? tf.PlayIcon : th.PauseIcon,
        J = y ? tg._ : tp.t;
    return (0, a.jsxs)(eJ.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: I,
        onSelect: I,
        children: [
            null != g || null != x || null != b || null != N
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "refresh",
                                    icon: tx.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: tx.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: p,
                                    action: g,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: Z,
                                    leadingAccessory: { type: "icon", icon: Z },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "toggle-popout",
                                    icon: J,
                                    leadingAccessory: { type: "icon", icon: J },
                                    label: E.intl.string(y ? E.t["NKV/MO"] : E.t["3Zypbv"]),
                                    action: b,
                                })
                              : null,
                          null != N
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "close",
                                    icon: tv.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: tv.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: N,
                                })
                              : null,
                      ],
                  })
                : null,
            null != w
                ? (0, a.jsx)(eQ.rX, {
                      children: (0, a.jsx)(eQ.sL, {
                          id: "debug",
                          label: E.intl.string(S.default.Mt5k9d),
                          leftIcon: tj.BugIcon,
                          leadingAccessory: { type: "icon", icon: tj.BugIcon },
                          checked: k,
                          action: w,
                      }),
                  })
                : null,
            G.length > 0
                ? (0, a.jsx)(eQ.rX, {
                      children: G.map((e) =>
                          (0, a.jsx)(
                              eQ.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void P();
                                      let t = null == e.connectionType ? null : B.get(e.connectionType);
                                      null != t && $(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eQ.rX, {
                children: (0, a.jsx)(eQ.Dr, {
                    id: "mute",
                    label: E.intl.string(_ ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: Y,
                    leadingAccessory: { type: "icon", icon: Y },
                    action: () => (0, tL.$L)(t, !_),
                }),
            }),
            V
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          K
                              ? (0, a.jsx)(eQ.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(eQ.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          H
                              ? (0, a.jsx)(eQ.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            X
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          W
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: tb.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: tb.LinkIcon },
                                    action: () =>
                                        (0, tS.C)((0, tA.n)(l, z.VV.CONJURE, t), () =>
                                            (0, eX.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eQ.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: ty.L,
                              leadingAccessory: { type: "icon", icon: ty.L },
                              action: () =>
                                  (0, tS.C)(t, () =>
                                      (0, eX.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || U || q?.canRemoveBot === !0
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          s || U
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: tw.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tw.SettingsIcon },
                                    action: () =>
                                        (0, tR.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: M,
                                        }),
                                })
                              : null,
                          q?.canRemoveBot === !0
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: q.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        null != e && tG({ project: e, target: q, action: "remove" });
                                    },
                                })
                              : null,
                          F
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = ek.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tq.openModal)((t) => (0, a.jsx)(tK, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        if (null != e && null != q) tG({ project: e, target: q, action: "delete" });
                                        else
                                            (0, tc.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, R.K)(t, () =>
                                                        (0, eX.P0)({
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
function tY(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tX, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tH.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(tk.K, {
                                  icon: tN.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: tN.MoreHorizontalIcon,
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
var tZ = n(95264);
function tJ(e, t) {
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
                    (0, eX.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    te(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, eX.P0)({
                                    text:
                                        409 === (t = e instanceof e7 ? e.status : null)
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
                onImport: (s = tt(
                    i.useCallback(
                        (e) => {
                            let r = e9(e);
                            null != r
                                ? (0, eX.P0)({ text: r, variant: "critical" })
                                : (0, tc.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(q.BVt.CHANNEL(t, z.VV.CONJURE, n));
                                          try {
                                              await e8(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eX.P0)({
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
        isOwner: (0, ek.PV)(e),
        canRemix: (0, ek.H_)(e),
        onRemix: () => (0, tZ.A)(e, t),
        onExport: o,
    };
}
function tQ(e) {
    let { project: t, guildId: n } = e,
        l = tJ(t, n);
    return (0, a.jsx)(tX, { ...l, onCloseMenu: tu.Z_ });
}
function t0(e) {
    let { project: t, guildId: n } = e,
        l = tJ(t, n);
    return (0, a.jsx)(tY, { ...l, trigger: "iconButton" });
}
var t1 = n(638693);
class t2 extends Error {}
function t3(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ts.Ot)(e, t)
                    ? (0, u.pX)(q.BVt.CHANNEL(t, z.VV.CONJURE, e.id))
                    : (0, ti.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(t0, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, tu.jA)(e, () => (0, a.jsx)(tQ, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = e9(e);
                if (null != r) return void (0, eX.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await F({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await e8(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, R.xx)(t).catch(() => void 0), new t2());
                            }
                        },
                    });
                } catch (e) {
                    (0, eX.P0)({
                        text: e instanceof t2 ? E.intl.string(S.default["Q+l4Hv"]) : (0, T.mG)(e),
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
        className: t1.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: t1.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: t1.$s,
                        children: [
                            (0, a.jsx)(ta, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eY.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(p.Ip, {
                className: t1.XG,
                children: (0, a.jsx)(to.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var t4 = n(559106),
    t5 = n(663341),
    t7 = n(783977),
    t6 = n(559647),
    t8 = n(531685),
    t9 = n(477262),
    ne = n(432017);
let nt = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: t9.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: ne.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: e0.H, accept: "" },
];
var nn = n(289873),
    nl = n(285796),
    nr = n(922329);
async function na(e) {
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
var ni = n(153171);
let ns = ea.lN;
function no(e, t, n, l) {
    let r = ed(e, t).length;
    ev(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= ns)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ns }),
                    },
                };
            if (!(0, ea.Oq)(e.size, t))
                return "image/png" === t && e.size <= ea.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await na(e).catch(() => null);
                              return null != n && (0, ea.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: ex(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: ex(t) } };
            let a = ea.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function nu(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = eu.useState((e) => ec(e, t, n)),
        a = i.useCallback((e) => no(t, n, e, l), [t, n, l]),
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
                null != (r = (l = ed(t, n)).find((t) => t.localId === e)) &&
                    (eg(t, r),
                    em(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => eb(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function nc(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(nr.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(nn.y, { type: nn.t.SPINNING_CIRCLE_SIMPLE, className: ni.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ni.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(nl.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var nd = n(900797),
    nm = n(320448),
    nf = n(344587),
    nh = n(534554),
    ng = n(392208),
    np = n(822313),
    nx = n(837984),
    nv = n(359589),
    nj = n(254575);
function nb(e) {
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
function ny(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = nb(d),
        g = ng.P.indexOf(t.tier),
        p = d ? nd.t : nm._,
        x = ng.P.map(nh.D0),
        j = (0, nh.Tc)(t.tier),
        { text: b, phase: y } = (0, nf.Q)(j);
    return (0, a.jsx)("div", {
        className: nj.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(nj.t$, { [nj.Zr]: u && c, [nj.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(nj.Nr, nj.uO, { [nj.Zr]: d && f.entered, [nj.GF]: !d }),
                          children: (0, a.jsx)(nv.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${nj.Nr} ${nj.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nj.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: nj.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string((0, nh.FC)(l)),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: E.intl.string(S.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: nj.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(nj.Z, { [nj.xQ]: "exit" === y, [nj.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nj.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: nj.Nb,
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
                                (0, a.jsx)(nx.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = ng.P[e];
                                        null != n && n !== t.tier && s((0, nh.CM)((0, nh.j6)(t, n)));
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
function nw(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, np.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: p } = nb(f);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(ny, {
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
            return (0, a.jsx)(N.m, {
                text: E.intl.string(S.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(C.D, {
                    innerRef: c,
                    className: o ?? nj.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(t7.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var nk = n(200160),
    nN = n(465410);
function nC(e) {
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
        className: nk.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: nk.OW }) : null],
    });
}
function nA(e) {
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
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: nk.RC, children: t[l] });
}
function nS(e) {
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
        l = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        r = (0, o.bG)([t8.A], () => t8.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: nk.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(nA, { prompts: n, paused: s })
            : (0, a.jsx)(nC, { prompts: n, paused: s, showCaret: !t }),
    });
}
function nE(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: r,
            submitting: s,
            submitDisabled: o,
            error: u,
            modelSettings: c,
            onModelSettingsChange: d,
            attachments: m,
        } = e,
        [f, g] = i.useState(!1),
        p = i.useRef(null),
        x = i.useId(),
        j = "" !== t,
        b = E.intl.string(E.t.d56gCa),
        y = i.useRef(null),
        w = i.useRef(null),
        { addFiles: k, pasteFiles: N, removeAttachment: C } = m,
        A = i.useCallback((e) => {
            let t = y.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        I = i.useCallback(
            (e) => {
                (k(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [k],
        );
    i.useLayoutEffect(() => {
        let e = n.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, n]);
    let _ = i.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
        },
        [o, r],
    );
    return (0, a.jsxs)("div", {
        className: nk.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(nk.yk, { [nk.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: nk.Ox,
                        children: [
                            (0, a.jsx)(t4.vN, {
                                ringTarget: p,
                                ringClassName: nk.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(nk.hF, nN.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? x : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: _,
                                    onPaste: (e) => N(e),
                                    onFocus: () => g(!0),
                                    onBlur: () => g(!1),
                                }),
                            }),
                            j ? null : (0, a.jsx)(nS, { boxFocused: f }),
                        ],
                    }),
                    m.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: nk.ZO,
                              children: m.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(nc, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: nk.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: y,
                                type: "file",
                                multiple: !0,
                                onChange: I,
                                className: nk.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(eZ.Y, {
                                targetElementRef: w,
                                position: "top",
                                align: "left",
                                animation: eZ.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(eJ.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": b,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(eQ.rX, {
                                            children: nt.map((e) =>
                                                (0, a.jsx)(
                                                    eQ.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => A(e.accept),
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
                                        ref: w,
                                        type: "button",
                                        className: nk.gb,
                                        disabled: s,
                                        "aria-label": b,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(t5.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: nk.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsxs)("div", {
                                className: nk.Rc,
                                children: [
                                    (0, a.jsx)(nw, {
                                        settings: c ?? $,
                                        tiers: D,
                                        choices: L,
                                        disabled: s,
                                        onChange: d,
                                        className: nk.gb,
                                        icon: (0, a.jsx)(t7.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(eL.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: t6.SendMessageIcon,
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
                      id: x,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var nI = n(628284),
    n_ = n(369606),
    nM = n(926268),
    nT = n(406810),
    nP = n(707554),
    nR = n(651346);
function nL(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nR.n8, t) });
}
let n$ = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nR.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.My,
                            children: [
                                (0, a.jsx)("span", { className: nR._w }),
                                (0, a.jsx)("span", { className: nR._w }),
                                (0, a.jsx)("span", { className: nR._w }),
                            ],
                        }),
                        (0, a.jsx)(nL, { className: nR.Lm }),
                        (0, a.jsx)("div", {
                            className: nR.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nR.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nR.NU }),
                                            0 === e
                                                ? (0, a.jsx)(nI.y, {
                                                      size: "xs",
                                                      color: k.A.colors.ICON_BRAND,
                                                      className: nR._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(nL, { className: nR.Eg }),
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
                    className: h()(nR.x, nR.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nR.gg, nR.K1) }),
                        (0, a.jsx)("span", { className: h()(nR.gg, nR.W2) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.A$) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.eP) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.kc) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.OE) }),
                        (0, a.jsx)("span", { className: nR.OC }),
                        (0, a.jsxs)("div", {
                            className: nR.si,
                            children: [
                                (0, a.jsx)(n_.TrophyIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nR.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.KQ,
                            children: [
                                (0, a.jsx)(nM.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nM.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nM.HeartIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
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
                    className: nR.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.$y,
                            children: [(0, a.jsx)("span", { className: nR.m$ }), (0, a.jsx)(nL, { className: nR.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nR.my, nR.FY),
                                    children: (0, a.jsx)(eU.RobotIcon, {
                                        size: "xs",
                                        color: k.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nR.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nR.f9,
                                            children: [
                                                (0, a.jsx)(nL, { className: nR.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nR.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(nL, { className: nR.xs }),
                                        (0, a.jsx)(nL, { className: nR.Md }),
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
                    className: h()(nR.x, nR.ME),
                    children: [
                        (0, a.jsx)("span", { className: nR.CK }),
                        (0, a.jsxs)("div", {
                            className: nR.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nR.my, nR.jU) }),
                                (0, a.jsx)(nL, { className: nR.iE }),
                                (0, a.jsxs)("div", {
                                    className: nR.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nR.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nR.dJ,
                                                        children: [
                                                            (0, a.jsx)(nL, { className: nR.cR }),
                                                            (0, a.jsx)(nL, { className: nR.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nR.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nR.QR }, e),
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
                    className: nR.JH,
                    children: [
                        (0, a.jsx)("span", { className: nR.rx }),
                        (0, a.jsx)("span", { className: nR.ny }),
                        (0, a.jsx)("span", { className: nR.ZH }),
                        (0, a.jsx)("div", {
                            className: nR.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nR.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nR._h, { [nR.zY]: 0 === e }) }),
                                            (0, a.jsx)(nL, { className: nR.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.Y5,
                            children: [
                                (0, a.jsx)(nT.ClockIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(nL, { className: nR.jB }),
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
                    className: nR.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.iU,
                            children: [
                                (0, a.jsx)("span", { className: nR.my }),
                                (0, a.jsxs)("div", {
                                    className: nR.OS,
                                    children: [
                                        (0, a.jsx)(nL, { className: nR.iE }),
                                        (0, a.jsx)(nL, { className: h()(nR.xs, nR.pc) }),
                                        (0, a.jsx)(nL, { className: h()(nR.Md, nR.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.jC,
                            children: [
                                (0, a.jsx)(eF.ShieldIcon, { size: "sm", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nR.qQ,
                                    children: [
                                        (0, a.jsx)(nL, { className: h()(nR.Md, nR.k8) }),
                                        (0, a.jsx)(nL, { className: h()(nR.nq, nR.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nD = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nR.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nP.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nR.Vg,
                    children: n$.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nR.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nR.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nR.pG,
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
function nO(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nq = 1;
function nz(e) {
    let t = nO(e),
        n = { localId: nq++, name: e.name, contentType: t };
    if (
        !(0, ea.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= ea.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: ex(t) } };
    let l = ea.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nF(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nU(e, t) {
    if ((0, ea.Oq)(t.size, nO(t))) return (0, ei.vX)(e, t);
    let n = await na(t);
    if (null == n || !(0, ea.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, ei.vX)(e, n);
}
var nG = n(698638),
    nB = n(606128),
    nK = n(260024);
class nH extends Error {}
function nV(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState("");
    (0, M.N$)(l);
    let [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, w] = i.useState(() => G.w.get(B) ?? null ?? !0),
        k = i.useRef(null),
        N = i.useMemo(
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
        C = "user" === (0, b.o)().get(U.f_),
        A = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(nF), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nz);
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
                    null != l && (nF(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(nF), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= ea.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ea.lN });
                            return e.map((e, n) =>
                                n < ea.lN || "error" === e.draft.status
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
        { attachments: I, addFiles: L, clear: $ } = A,
        D =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: null, submitting: s })) ||
            "submitting" === t ||
            A.hasErrors,
        O = i.useCallback((e) => L(Array.from(e)), [L]);
    (0, eR.p)(k);
    let q = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        z = i.useCallback(
            (e) => {
                q(e);
                let t = k.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [q],
        ),
        K = i.useRef(!1),
        H = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !K.current) {
                ((K.current = !0), o(!0), c(null));
                try {
                    await F({
                        guildId: n,
                        installScope: C ? "user" : null,
                        prompt: e,
                        modelSettings: d,
                        start: async (t) => {
                            let n = [];
                            if (I.length > 0)
                                try {
                                    n = await Promise.all(
                                        I.map((e) => {
                                            let { file: n } = e;
                                            return nU(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, R.xx)(t).catch(() => void 0), new nH());
                                }
                            (!(function (e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                if (ek.Ay.getProject(e)?.install_scope_setup != null)
                                    G.w.set(eN, { ...eE(), [e]: { message: t, attachments: n, nonce: (0, V.m)() } });
                                else (0, P.sendUserMessage)(e, t, n);
                            })(t, e, n),
                                $());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nH ? E.intl.string(S.default["903H7m"]) : (0, T.mG)(e)), (K.current = !1), o(!1));
                }
            }
        }, [l, C, d, n, I, $]),
        W = i.useCallback((e) => {
            (G.w.set(B, e), w(e));
        }, []),
        X = i.useCallback(() => W(!1), [W]),
        Y = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nK.MY, nB.T),
        children: (0, a.jsxs)("div", {
            className: nK.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nK.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nG.ir,
                                  onDrop: O,
                              }),
                        (0, a.jsx)(_, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: g.Z,
                                color: "var(--icon-strong)",
                                className: nK.FW,
                                tooltip: Y,
                                "aria-label": Y,
                                selected: f,
                                onClick: () => W(!f),
                            }),
                        }),
                        (0, a.jsx)(p.Ip, {
                            className: nK.XG,
                            children: (0, a.jsxs)("div", {
                                className: nK.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nK.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nK.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nK.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nK.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: nK.ZK,
                                                children: [
                                                    (0, a.jsx)(nE, {
                                                        idea: l,
                                                        inputRef: k,
                                                        onIdeaChange: q,
                                                        onSubmit: H,
                                                        submitting: s,
                                                        submitDisabled: D,
                                                        error: u,
                                                        modelSettings: d,
                                                        onModelSettingsChange: m,
                                                        attachments: A,
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: E.intl.string(S.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(eW, { inspirations: N, onCopyPrompt: z }),
                                    (0, a.jsx)(nD, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(t3, { guildId: n, modelSettings: d, onClose: X }) : null,
            ],
        }),
    });
}
var nW = n(478016),
    nX = n(604525),
    nY = n(534890),
    nZ = n(646270),
    nJ = n(31300),
    nQ = n(831453),
    n0 = n(646973);
let n1 = Object.freeze({ x: 0.5, y: 0.5 });
function n2(e) {
    return "" !== e.trim();
}
function n3(e) {
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
function n4(e) {
    let { kind: t, name: n } = n3(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function n5(e) {
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
let n7 = "[conjure:selected] ",
    n6 = " \u2014 ";
function n8(e) {
    if (!e.startsWith(n7)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(n7.length),
        a = r.indexOf(n6),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let n9 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    le = new Map(),
    lt = new Set();
function ln(e) {
    return le.get(e) ?? n9;
}
function ll(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? le.set(e, t) : le.delete(e), [...lt]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function lr(e) {
    let t = ln(e);
    t.active || ll(e, { ...t, active: !0 });
}
function la(e) {
    let t = ln(e);
    t.active && ll(e, { ...t, active: !1 });
}
function li(e) {
    le.has(e) && ll(e, n9);
}
function ls(e, t) {
    let n = ln(e);
    n.active && ll(e, { ...n, context: t });
}
function lo(e, t) {
    return null != t && e.authorId === t;
}
function lu(e) {
    return (
        lt.add(e),
        () => {
            lt.delete(e);
        }
    );
}
function lc(e) {
    let t = i.useCallback(() => (null == e ? n9 : ln(e)), [e]);
    return i.useSyncExternalStore(lu, t, t);
}
(n(134528), n(947204));
let ld = { past: [], present: [], future: [] };
function lm(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function lf(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function lh(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => lf(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: lf(e.from, t, n), to: lf(e.to, t, n) };
        case "text":
            return { ...e, at: lf(e.at, t, n) };
    }
}
function lg(e) {
    return e.some((e) => "erase" !== e.kind);
}
function lp(e, t) {
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
function lx(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function lv(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function lj(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => lv(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = lv(e.from, t),
                l = lv(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = lv(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function lb(e) {
    return lg(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let ly = [3, 6, 12],
    lw = [10, 20, 40],
    lk = (0, er.D)(() => ({ byProject: {} })),
    lN = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: ld,
        sketchDismissedFor: null,
    };
function lC(e) {
    return lk.getState().byProject[e] ?? null;
}
function lA(e, t) {
    let n = lC(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = lk.getState();
    lk.setState({ byProject: { ...r, [e]: l } });
}
function lS(e) {
    if (null == lC(e)) return;
    let { [e]: t, ...n } = lk.getState().byProject;
    (lk.setState({ byProject: n }), li(e));
}
function lE(e, t) {
    null != lC(e) &&
        (lA(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? lr(e) : la(e));
}
function lI(e, t) {
    lA(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return lm(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return lm(
                        e,
                        e.present.map((e) => (e.id === t.id ? lh(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : lm(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : lm(e, []);
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
function l_(e) {
    return lk.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lM = n(39416);
function lT(e) {
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
            className: lM.i5,
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
var lP = n(91242),
    lR = n(457827),
    lL = n(802905),
    l$ = n(573083);
function lD(e) {
    return X.A.isThinking(e) || (0, l$.wK)(e);
}
var lO = n(35525),
    lq = n(881511);
let lz = new Set();
function lF(e, t) {
    if (!(lz.has(t) || (lD(e) && !lL.A.isPaused(e))))
        for (let e of lP.A.getAllFrames())
            e.applicationId === t &&
                (0, lq.D)(e) &&
                !(lO.A.isInHostWindow(e) || (lO.A.isActivityPopoutOpen() && lP.A.getMainFrame()?.id === e.id)) &&
                (0, lR.r)(e.id);
}
var lU = n(766367);
let lG = new Set(),
    lB = null;
function lK(e, t) {
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
                lG.add(t),
                () => {
                    lG.delete(t);
                }
            );
        }, [e]));
}
var lH = n(253932);
function lV() {
    return lH.Q_.useSetting() || !1;
}
let lW = (0, n(945810).mj)({
    name: "2026-10-conjure-mcp-ui",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
});
var lX = n(128761),
    lY = n(12177),
    lZ = n(967008),
    lJ = n(513845),
    lQ = n(951178);
let l0 = { width: 320, height: 240 };
function l1(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : l0;
}
function l2(e) {
    return l1(e?.preview_overlay_widget ?? null);
}
var l3 = n(855859),
    l4 = n(238490),
    l5 = n(991690),
    l7 = n(696645);
function l6(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function l8(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, l7.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, l7.X)(e.surface),
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
var l9 = n(939398),
    re = n(86147),
    rt = n(729475),
    rn = n(156548),
    rl = n(869146),
    rr = n(475815),
    ra = n(165610);
function ri(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, rn.cR)(t?.id ?? null),
        r = (0, l$.Zv)(n),
        i = (0, o.bG)(
            [rl.A, lP.A],
            () => null != t && rl.A.getWindowOpen(q.MLl.ACTIVITY_POPOUT) && lP.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, ra.x1)(t) || i || r) return null;
    let s = (0, rn.fl)(t.id);
    if (null == s || !(0, rr.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? re.z : rt.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, rn.U8)(t.id),
    });
}
var rs = n(847374),
    ro = n(704745);
function ru(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eJ.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eQ.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = l6(e);
                        return (0, a.jsx)(
                            eQ.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: l8(e),
                                checked: t === l6(n),
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
            return (0, a.jsx)(t4.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: ro.h,
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
                            children: l8(n),
                        }),
                        (0, a.jsx)(rs.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var rc = n(324641),
    rd = n(627363),
    rm = n(153207),
    rf = n(803101),
    rh = n(226178),
    rg = n(625180),
    rp = n(672929),
    rx = n(111534),
    rv = n(754027),
    rj = n(722701),
    rb = n(962998);
function ry(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
var rw = n(373540),
    rk = n(144228);
function rN(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(tD.a, {
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
        children: (0, a.jsx)(rk.z, {
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
let rC = {
    showPublishBlocked: rw.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, tq.openModal)(
                (t) =>
                    (0, a.jsx)(rN, {
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
    showError: (e) => (0, eX.P0)({ text: e, variant: "critical" }),
};
var rA = n(811587);
let rS = "conjure-publish";
function rE(e) {
    let t = (0, tq.getInteractingModalContext)(),
        l = { current: !1 };
    (0, tq.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("880475"), n.e("801342"), n.e("924150")]).then(
                n.bind(n, 372501),
            );
            return (n) => (0, a.jsx)(t, { ...n, ...e, savingRef: l });
        },
        {
            modalKey: rS,
            contextKey: t,
            onCloseRequest: () => {
                l.current || (0, tq.closeModal)(rS, t);
            },
        },
    );
}
function rI(e, t, n) {
    let l, r;
    return (
        (l = i.useContext(tT.bI)),
        (r = n ?? l),
        i.useCallback(
            (n) => {
                if (null == e || null == t || null == r || t.disabled) return;
                let l = t.status?.publishState;
                t.awaitingApproval || (null != l && (0, rA.lE)(l))
                    ? t.run(n)
                    : rE({ projectId: e, publishOptions: r, entryPoint: n });
            },
            [e, t, r, rE],
        )
    );
}
var r_ = n(58736),
    rM = n(333007),
    rT = n(775121),
    rP = n(826745),
    rR = n(470779);
function rL(e) {
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
            anchor: g = "chip",
            allowAttachments: p = !0,
            placeholder: x,
            label: v,
        } = e,
        {
            drafts: j,
            addFiles: b,
            pasteFiles: y,
            removeDraft: w,
            settled: k,
            takeRefs: C,
        } = nu({ projectId: t, surface: "design", onUploadFile: f }),
        A = i.useRef(null),
        I = (d || j.length > 0) && k && !m,
        _ = i.useCallback(() => {
            if (!I) return;
            let e = C();
            u(e.length > 0 ? e : void 0);
        }, [I, C, u]),
        [M, T] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => T(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let P = i.useRef(null),
        [R, L] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = P.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => L({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let $ = R?.height ?? 44,
        D = l.left + 8,
        O = l.top + 8,
        q = Math.max(n.x, D),
        z = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, O), Math.max(O, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: P,
        className: h()(rR.M0, { [rR.ho]: M && !m, [rR.ET]: m }),
        style: { left: q, top: z },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: rR.Fg,
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
                                  className: rR.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(e0.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rR.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(rP.y, {
                autoFocus: !0,
                rows: 1,
                className: rR.hF,
                value: s,
                placeholder: x ?? ("" === r ? E.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), _());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: rR.ZO,
                      children: j.map((e) => (0, a.jsx)(nc, { draft: e, onRemove: w }, e.localId)),
                  })
                : null,
        ],
    });
}
function r$(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rD(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rO(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? r$(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = r$(e());
                l((e) => (rD(e, t) ? e : t));
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
var rq = n(876798),
    rz = n(48507),
    rF = n(193885),
    rU = n(744898),
    rG = n(803656),
    rB = n(241326),
    rK = n(972213);
function rH(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rV(e, t, n) {
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
let rW = rV("red", rH(k.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rX = [
        rW,
        rV("yellow", rH(k.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rV("green", rH(k.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rV("blue", rH(k.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rV("white", rH(k.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rY(e) {
    return rX.find((t) => t.id === e) ?? rW;
}
function rZ(e) {
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
function rJ(e) {
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
function rQ(e) {
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
function r0(e) {
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
let r1 = ly.map((e) => r0(Math.min(16, e + 3))),
    r2 = lw.map((e) => r0(Math.min(16, e / 2.5))),
    r3 = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    r4 = {
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
function r5(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lM.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rq.k, {
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
function r7(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tk.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function r6(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: lM.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lM.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function r8(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rY(n.colorId),
        h = r4[u],
        g = E.intl.string(S.default.hUm825),
        p = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lM.t$,
        children: [
            (0, a.jsx)("div", {
                className: lM.NT,
                children: (0, a.jsx)(r5, {
                    icon: rJ,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => lE(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lM.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(r5, {
                        icon: rZ,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => lE(t, "move"),
                    }),
                    (0, a.jsx)(r5, {
                        icon: rz.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => lE(t, "text"),
                    }),
                    (0, a.jsx)(r6, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r5, {
                                icon: rF.V,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (lE(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            r1.map((n, l) =>
                                (0, a.jsx)(
                                    r5,
                                    {
                                        icon: n,
                                        label: E.intl.string(r3[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lA(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), la(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r6, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(r5, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (lE(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(r4).map((n) =>
                                (0, a.jsx)(
                                    r5,
                                    {
                                        icon: r4[n].icon,
                                        label: r4[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (lE(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r6, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r5, {
                                icon: rQ,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (lE(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            r2.map((n, l) =>
                                (0, a.jsx)(
                                    r5,
                                    {
                                        icon: n,
                                        label: E.intl.string(r3[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lA(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), la(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r6, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(r7, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rX.map((n) =>
                                (0, a.jsx)(
                                    r5,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                lA(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lM.Gz, role: "separator" }),
                    (0, a.jsx)(r7, {
                        icon: rU.e,
                        label: E.intl.string((0, e2.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r7, {
                        icon: rG.U,
                        label: E.intl.string((0, e2.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r7, {
                        icon: rB.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lM.Gz, role: "separator" }),
                    (0, a.jsx)(r7, { icon: rK.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let r9 = k.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function ae(e, t, n) {
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
                    (e.strokeStyle = r9),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function at(e) {
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
async function an(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = at(e),
            r = at(e);
        if (null == l || null == r) return null;
        return (ae(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let al = new Map(),
    ar = new Map(),
    aa = (0, er.D)(() => ({ byMessageKey: {} }));
function ai(e, t) {
    let { [e]: n, ...l } = aa.getState().byMessageKey;
    aa.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function as(e, t) {
    null == t ? al.delete(e) : al.set(e, t);
}
function ao(e) {
    return al.get(e)?.() ?? Promise.resolve(null);
}
let au = { dx: 0, dy: 0 },
    ac = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    ad = 1;
function am(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = l_(s),
        { active: u } = lc(s),
        c = (0, tq.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => lS(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && lr(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(af, { projectId: s, state: o, resolveIframe: r });
}
function af(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rO(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [g, p] = i.useState(au),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rY(n.colorId),
        _ = "pick" !== C,
        M = "marker" === n.tool ? ly[n.markerSize] : "eraser" === n.tool ? lw[n.eraserSize] : null,
        T = "move" === C ? (A.present.find((e) => e.id === f) ?? null) : null,
        P = null != r;
    (i.useLayoutEffect(() => {
        m(v.current?.offsetWidth ?? 0);
    }, [P]),
        i.useLayoutEffect(() => {
            y.current = s;
        }, [s]));
    let R = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, rc.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rM.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, rc.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (as(t, R), () => as(t, null)), [t, R]);
    let L = i.useCallback(
        (e) => {
            ((k.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === N.current &&
                    (N.current = requestAnimationFrame(() => {
                        N.current = 0;
                        let e = w.current,
                            t = k.current;
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? lh(e, g.dx, g.dy) : e)),
            o = j.current;
        ae(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, g]);
    i.useLayoutEffect($, [$]);
    let D = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        O = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${ad++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (lp(n, r) && lI(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        q = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        z = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void O();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == T ? null : lj(T, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? T
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = lv(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => lv(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (lx(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = lv(e.from, n),
                                                                  r = lv(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => lx(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = lv(e.from, n),
                                                                  r = lv(e.to, n),
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
                                                              let t = lj(e, n);
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
                        if (!lg(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${ad++}`,
                                kind: "erase",
                                width: lw[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${ad++}`,
                                kind: "marker",
                                color: I.value,
                                width: ly[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${ad++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, T, A.present, n.markerSize, n.eraserSize, D, O, $],
        ),
        F = i.useCallback(
            (e) => {
                L(e);
                let t = D(e),
                    n = b.current;
                if (null != n) return void p({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
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
                ((b.current = null), p(au), lI(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && lp(n, r) ? lI(t, { type: "commit", shape: n }) : $());
        }, [t, r, g, $]),
        G = i.useCallback(() => lS(t), [t]),
        B = i.useCallback(() => lI(t, { type: "undo" }), [t]),
        K = i.useCallback(() => lI(t, { type: "redo" }), [t]),
        H = i.useCallback(() => lI(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: T, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: T, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eB.Cw)((0, eB.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), lI(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = ac[s];
                null != o && (e.preventDefault(), lE(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (_) return (rT.A.disable(), () => rT.A.enable());
        }, [_]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == T ? null : lj(null == b.current ? T : lh(T, g.dx, g.dy), r);
    return (0, rM.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lM.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lM.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lM.Ji,
                            "data-tool": C,
                            "data-interactive": _ && !u ? "" : void 0,
                            "aria-label": E.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: z,
                            onPointerEnter: L,
                            onPointerLeave: () => L(null),
                            onPointerMove: F,
                            onPointerUp: U,
                            onPointerCancel: U,
                        }),
                        null == M || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: w,
                                  className: lM.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: M, height: M },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lM.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(rL, {
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
                          onSubmit: O,
                          onUploadFile: (e) => (0, ei.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lM.ej,
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(r8, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var ah = n(308081),
    ag = n(689175),
    ap = n(683071),
    ax = n(218394),
    av = n(115982),
    aj = n(886540);
function ab(e) {
    return !(0, aj.BL)(e) && !0 !== e.stopRequested;
}
var ay = n(104317),
    aw = n(643278),
    ak = n(566424),
    aN = n(683063),
    aC = n(140735),
    aA = n(138212);
function aS(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(aA.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(aA.wx, null != n && aA.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var aE = n(148590);
function aI(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function a_(e) {
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
        [f, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = f ? rs.a : nm._,
        b = null != n || l;
    return (0, a.jsxs)(aS, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: aE.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: aE.L$,
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
        headerClassName: f ? void 0 : aE.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(aE.rf, o), hidden: !f, children: c })],
    });
}
var aM = n(883646);
let aT = [];
function aP(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(aM.xL, {
            [aM.Vb]: "in_progress" === t,
            [aM.cT]: "completed" === t,
            [aM.GZ]: "unfinished" === t,
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
            (0, a.jsx)(nn.y, {
                type: nn.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: aM.Qd,
                itemClassName: aM.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: aM.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: aM.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function aR(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aT), [n, t]),
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
        className: aM.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    aN.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: aM.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: aM.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function aL(e) {
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
            ((t = (r ?? aT).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? aT),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: aM.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(aM.AS, { [aM.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(aP, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: aM.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: aM.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(aR, { agents: u.get(e.id) ?? aT, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: aM.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(aP, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: aM.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: aM.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function a$(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(a_, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(aI, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: aM.Nr,
        bodyClassName: aM.rf,
        beforeBody: r && !s ? (0, a.jsx)(aC.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(aL, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var aD = n(308665),
    aO = n(59678),
    aq = n(903847);
function az(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, g] = i.useState(c),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => g(!1), 150);
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
    let [w, k] = i.useState(!1),
        [A, I] = i.useState(!1),
        [_, M] = i.useState(v);
    (_ !== v && (M(v), v ? k(!0) : I(!1)),
        i.useEffect(() => {
            if (v || !w) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [v, w]),
        i.useEffect(() => {
            if (!w || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => I(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [w, v]));
    let T = null != l && l.length > 0,
        P = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: aq.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(aq.vK, { [aq.ho]: p && c, [aq.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(aq.Rk, aO.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(ak.A, {
                                        glyph: (0, a.jsx)(aD.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: aq.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(aq.Rk, aO.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(ak.A, {
                                            glyph: (0, a.jsx)(aD.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, a.jsx)(N.m, {
                                    text: E.intl.string(S.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(C.D, {
                                        className: aq.BO,
                                        onClick: P,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(aw.ClipboardListIcon, {
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
                  w && T
                      ? (0, a.jsx)("div", {
                            className: h()(aq.vB, { [aq.pg]: v && A, [aq.ui]: !v }),
                            children: (0, a.jsx)(a$, {
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
var aF = n(16619);
function aU(e) {
    let t = (0, aF.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aG = n(736553),
    aB = n(642785);
async function aK(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, aB.dv)(e),
        i = new aG.u();
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
var aH = n(890497),
    aV = n(103557),
    aW = n(29073),
    aX = n(590077);
function aY(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = aU(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [g, p] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                j = i.useRef(!1),
                b = i.useMemo(() => a.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [a, u]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                w = i.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                k = i.useMemo(() => b.filter((e) => w.includes(e.projectId)), [b, w]),
                N = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                C = d.trim(),
                A = n && !f && (k.length > 0 ? "" !== C : u.length > 0),
                I = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : ey(
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
                _ = i.useCallback(() => {
                    let t, n;
                    if (!A) return;
                    if (0 === k.length) return void I(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = ek.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        k.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, V.m)() }), x.current.set(e.projectId, t)),
                                aK(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = k.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === k.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(k.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [A, I, u, e, k, C]),
                M = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !f && I(u), l());
                }, [I, u, l, f]);
            return {
                projects: b,
                targetIds: w,
                setTargetIds: N,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: g,
                canSubmit: A,
                submit: _,
                dismiss: M,
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
        className: h()(aW.nd, aW.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aW.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aW.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tk.K, {
                        icon: eY.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aX.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(aH.Z, {
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
                    (0, a.jsx)(aV.f, {
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
                className: aW.qr,
                children: (0, a.jsx)("div", {
                    className: aW.zt,
                    children: (0, a.jsx)(eL.$, {
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
var aZ = n(658675),
    aJ = n(22231),
    aQ = n(123292),
    a0 = n(691885),
    a1 = n(360047);
function a2(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => a1.Hi.map((e) => ({ id: e, value: e, label: (0, a1.hU)(e) })), []);
    return (0, a.jsx)(a0.l, {
        label: t,
        hideLabel: n,
        autoFocus: l,
        options: u,
        value: r,
        selectionMode: "single",
        fullWidth: !0,
        disabled: s,
        onSelectionChange: o,
    });
}
var a3 = n(47167),
    a4 = n(734057),
    a5 = n(994500),
    a7 = n(287809);
function a6(e) {
    return 0 === e.options.length && null == e.input;
}
let a8 = {
    [q.rbe.GUILD_TEXT]: "text",
    [q.rbe.GUILD_VOICE]: "voice",
    [q.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [q.rbe.GUILD_STAGE_VOICE]: "stage",
    [q.rbe.GUILD_FORUM]: "forum",
    [q.rbe.GUILD_MEDIA]: "media",
};
function a9(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = a4.A.getChannel(t)?.type) ? void 0 : a8[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = a7.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let ie = { channel: "#", role: "@", user: "@", project: "", server: "" },
    it = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
        server: [S.default.ZWXDeI, S.default.ZWXDeI],
    };
function il(e, t) {
    return E.intl.string(it[e][+!!t]);
}
var ir = n(155078);
function ia(e) {
    return e.options.some((e) => null != e.image);
}
let ii = [];
function is(e, t) {
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
var io = n(548118),
    iu = n(300344),
    ic = n(614733),
    id = n(904363),
    im = n(950902),
    ih = n(136722),
    ig = n(66834),
    ip = n(808728),
    ix = n(488926),
    iv = n(426035);
let ij = ih.kg(q.xBc.VIEW_CHANNEL, q.xBc.SEND_MESSAGES);
var ib = n(384017);
function iy(e) {
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
        return a9(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
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
        className: ib.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(aH.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(aH.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function iw(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, iu.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: m } = e,
            f =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, o.bG)(
                    [ek.Ay],
                    () => {
                        let e = t ? ek.Ay.getProject(l) : null;
                        return null == e ? null : (0, iv.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || c.Ay.isMember(r, n) || ig.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, o.bG)(
                    [ip.Ay, c.Ay, d.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = d.A.getGuild(r)?.safetyAlertsChannelId,
                            l = ip.Ay.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, ts.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && c.Ay.isMember(r, n))
                            return ix.$3({ permission: ij, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? ih.BY;
                        return ih.X8(s, ij) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            h = i.useRef(null),
            g = i.useRef(!1);
        i.useEffect(() => {
            if (!g.current && !u && null != r) {
                if (null == h.current) {
                    if (s.length > 0) g.current = !0;
                    else if (null != f) {
                        var e;
                        ((h.current = f.id),
                            m(((e = []), a9("channel", [f.id], () => (0, a3.m1)(f, a7.default, a5.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== h.current ? (g.current = !0) : null == f && ((g.current = !0), m([], r));
            }
        }, [f, u, r, m, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(iy, { ...r, guildId: n, options: s, placeholder: il("channel", !0 === r.question.multi_select) });
}
function ik(e) {
    let { guildId: t, ...n } = e,
        l = (0, id.A)(t);
    return (0, a.jsx)(iy, { ...n, guildId: t, options: l, placeholder: il("role", !0 === n.question.multi_select) });
}
function iN(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, ic.A)(t);
    return (0, a.jsx)(iy, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: il("user", !0 === n.question.multi_select),
    });
}
function iC(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = aU(t),
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
    return 0 === s.length ? n : (0, a.jsx)(iy, { ...l, options: s, placeholder: il("project", !1) });
}
function iA(e) {
    let t = e.target;
    (0, eB.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function iS(e) {
    let { fallback: t, ...n } = e,
        l = (0, aF.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(io.Ay, { guild: e, size: io.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: iA,
              onMouseUp: iA,
              children: (0, a.jsx)(iy, { ...n, options: r, placeholder: il("server", !1) }),
          });
}
function iE(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, im.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(iC, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(iS, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(iw, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(ik, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(iN, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var iI = n(87221),
    i_ = n(26430),
    iM = n(750943),
    iT = n(95477),
    iP = n(256905),
    iR = n(490707),
    iL = n(907702);
function i$(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, iR._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(iL.Gt, iL.b6),
              children: [
                  (0, a.jsx)(iI.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(iL.Gt, { [iL.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: iL.Sl,
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
function iD(e) {
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
            onMeasured: g,
            onRemove: p,
        } = e,
        x = E.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: h()(iL.Vs, { [iL.Q9]: s, [iL.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: iL.Up,
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
                        className: iL.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(i$, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: iL.Gt }),
                            (0, a.jsx)("span", {
                                className: iL.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aZ.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rk.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: iL.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, ir.E)(t) : "")
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
                      className: iL.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(tk.K, {
                              icon: rB.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": E.intl.string(S.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: iL.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(tk.K, {
                                icon: i_._,
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
function iO(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, ei.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, iP.R)({
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
                (v(l.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, m],
        ),
        w =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: E.intl.string(S.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: iL.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: h()(iL.fF, "gallery" === f ? iL.nV : iL.nM, { [iL.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            iD,
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
                              iD,
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
            (0, a.jsx)(iq, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function iq(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function g() {
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
        className: iL.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: iL.QJ,
                children: [
                    (0, a.jsx)(eL.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: iM.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(eL.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: tb.LinkIcon,
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
                        className: iL.Fg,
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
                                        (0, ea.Oq)(a.size, r)
                                            ? (0, ei.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: ex(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: iL.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: iL.Hs,
                              children: (0, a.jsx)(iT.k, {
                                  label: E.intl.string(S.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(S.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
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
                              className: iL.gd,
                              children: [
                                  (0, a.jsx)(eL.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aQ.Q, {
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
function iz(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(ib.uK, { [ib.ue]: l, [ib.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: ib.dy, children: (0, a.jsx)(aZ.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: ib.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: ib.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: ib.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: ib.ed,
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
                      className: ib.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iF(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return ia(n)
        ? (0, a.jsx)(iO, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      iz,
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
let iU = [],
    iG = [];
function iB(e) {
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
        className: h()(ib.Ge, ib.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ib.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iF, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: is(o, u),
            }),
            ia(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: ib.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: ib.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aJ.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(ib.Pu, ib.es), children: c }),
                      ],
                  }),
        ],
    });
}
function iK(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: u,
            backText: c,
            hideSubmit: d = !1,
            headingLines: m = 5,
        } = e,
        [f, g] = i.useState({}),
        [p, x] = i.useState({}),
        [j, b] = i.useState({}),
        [y, w] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [k, A] = i.useState({}),
        [I, _] = i.useState({}),
        [M, T] = i.useState(!1),
        [P, R] = i.useState(0),
        [L, $] = i.useState(null),
        [D, O] = i.useState(null),
        [q, z] = i.useState(null),
        [F, U] = i.useState(!1),
        G = i.useRef(null),
        [B, K] = i.useState(null),
        H = i.useRef(null),
        V = i.useRef(0),
        W = null == r,
        X = l.questions.length,
        Y = Math.min(P, X - 1),
        Z = l.questions[Y],
        [J, Q] = i.useState({ id: Z.id, expanded: !1 }),
        ee = J.id === Z.id && J.expanded,
        [et, en] = i.useState(null),
        el = p[Z.id] ?? "",
        er = !0 === Z.multi_select,
        ea = ia(Z),
        es = er ? (j[Z.id] ?? iU) : ((t = f[Z.id]), t?.kind === "option" ? [t.optionId] : ii),
        eo = (function (e, t, n) {
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
                        if (o) return is(h, m(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function p(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, ei.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, ei.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            g({
                                                busy: null,
                                                error: { source: "upload", text: E.intl.string(S.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, ei.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
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
        })(n, f, g),
        eu = eo.imageFor(Z.id),
        ec = eo.selectedFor(Z),
        { text: ed, phase: em } = (0, nf.Q)(Z.question),
        ef = ed === Z.question,
        eh = ef && et?.id === Z.id && et.truncated;
    i.useLayoutEffect(() => {
        if (null == B || ee || !ef) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === Z.id && t.truncated === e ? t : { id: Z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [ef, B, Z.id, ee]);
    let eg = E.intl.string(ee ? E.t.iTcuma : E.t.dcl9MQ),
        ep = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        var a;
                        let i = t.questions
                            .map((e, t) => ({ question: e, index: t, answer: n[e.id] }))
                            .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                            .map((e) => {
                                let { question: t, index: n, answer: l } = e;
                                return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                            })
                            .join("\n");
                        if ("" !== i) {
                            let s;
                            ((a = () => {
                                let e;
                                return r(
                                    i,
                                    (e = t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        if (null == t || "" === t.text.trim()) return [];
                                        let l =
                                                "option" === t.kind
                                                    ? [t.optionId]
                                                    : "multi" === t.kind
                                                      ? t.optionIds
                                                      : [],
                                            r =
                                                "custom" === t.kind
                                                    ? t.text.trim()
                                                    : "multi" === t.kind || "entities" === t.kind
                                                      ? t.custom
                                                      : void 0,
                                            a = "entities" === t.kind ? t.entities : [],
                                            i = "entities" === t.kind && a.length > 0 ? t.guildId : void 0,
                                            s = "image" === t.kind || "multi" === t.kind ? t.attachment : void 0;
                                        return [
                                            {
                                                question_id: e.id,
                                                option_ids: l,
                                                ...(null != r && "" !== r ? { custom: r } : {}),
                                                ...(null != s ? { attachment_id: s.id } : {}),
                                                ...(a.length > 0 ? { entities: a } : {}),
                                                ...(null != i ? { guild_id: i } : {}),
                                            },
                                        ];
                                    })).length > 0
                                        ? { clarification_id: t.id, answers: e }
                                        : null,
                                    t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        return null == t || "" === t.text.trim()
                                            ? []
                                            : "image" === t.kind || ("multi" === t.kind && null != t.attachment)
                                              ? [t.attachment]
                                              : [];
                                    }),
                                );
                            }),
                                0 ===
                                (s = t.questions.flatMap((e) => {
                                    let t = n[e.id];
                                    return !0 === e.link && t?.kind === "entities"
                                        ? t.entities.map((t) => ({ target: t.id, build: l[e.id] }))
                                        : [];
                                })).length
                                    ? a()
                                    : Promise.allSettled(
                                          s.map((t) => {
                                              let { target: n, build: l } = t;
                                              return (0, a1.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, I, r);
            },
            [l, I, r, n],
        ),
        ex = i.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                ($({ direction: t, moves: n }),
                    O({ question: Z, draft: el, selected: es, ownImage: eu, ownSelected: ec, direction: t, moves: n }),
                    U(!0),
                    R(e));
            },
            [el, eu, ec, Z, es],
        ),
        ev = i.useCallback(() => {
            let e = G.current,
                t = H.current;
            null != e && null != t && z({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = G.current,
            t = H.current;
        if (null == e || null == t) return;
        ev();
        let n = new ResizeObserver(ev);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ev]);
    let ej = L?.moves;
    i.useEffect(() => {
        if (null == ej) return;
        let e = setTimeout(() => O(null), 400),
            t = setTimeout(() => U(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ej]);
    let eb = i.useCallback(
            (e) => {
                if (W) return;
                let t = { ...f, [Z.id]: e };
                g(t);
                let n =
                    Y < l.questions.length - 1
                        ? Y + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, Y);
                null == n ? ep(t) : ex(n, n < Y ? "back" : "forward");
            },
            [f, l, W, Y, Z.id, ep, ex],
        ),
        ey = i.useCallback(() => {
            W || 0 === Y || ex(Y - 1, "back");
        }, [W, Y, ex]),
        ew = 0 !== Y || W ? void 0 : u,
        ek = (Y > 0 && !W) || null != ew,
        eN = i.useCallback(
            (e) => {
                x((e) => ({ ...e, [Z.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ea ? W || g((e) => ({ ...e, [Z.id]: t })) : eb(t);
            },
            [W, ea, Z.id, eb],
        ),
        { multiPartFor: eC } = eo,
        eA = i.useMemo(() => {
            var e;
            let t, n;
            return er
                ? ((e = eC(Z)),
                  (t = el.trim()),
                  (n = Z.options.filter((e) => es.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: es,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [el, er, eC, Z, es]),
        eS = y[Z.id] ?? iG,
        eE = i.useMemo(() => {
            var e, t;
            let n;
            return null != Z.input
                ? ((e = Z.input),
                  (t = k[Z.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: eS,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eS.map((t) => (t.name.startsWith(ie[e]) ? t.name : `${ie[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, k, eS, Z.id, Z.input]),
        eI = i.useCallback(
            (e, t) => {
                (w((t) => ({ ...t, [Z.id]: e })), A((e) => ({ ...e, [Z.id]: t })));
            },
            [Z.id],
        ),
        e_ = i.useCallback(() => T(!0), []),
        eM = i.useCallback(() => T(!1), []),
        eT = eo.controlsFor(Z, W),
        eP = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eE, eA, el),
            [el, eA, eE],
        ),
        eR = i.useCallback(() => {
            null != eP && eb(eP);
        }, [eP, eb]),
        [e$, eD] = i.useState(!1),
        [eO, eq] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eD(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ez = i.useCallback(() => {
            null != s && (eq(!0), setTimeout(s, 150));
        }, [s]),
        eF = eP ?? (null == eE && null == eA ? (f[Z.id] ?? null) : null),
        eU = null != eF && !W,
        eG = Y === X - 1,
        eK = i.useCallback(() => {
            null == eF || W || eb(eF);
        }, [W, eF, eb]),
        eH = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eB.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eB.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eB.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ek
                            ? (e.preventDefault(), (ew ?? ey)())
                            : "ArrowRight" === e.key && eU && (e.preventDefault(), eK())));
            },
            [ew, ek, eU, ey, eK],
        ),
        eV = ea
            ? null
            : (0, a.jsxs)("div", {
                  className: ib.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: ib.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aJ.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(rP.y, {
                          value: el,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              x((e) => ({ ...e, [Z.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eR());
                          },
                          placeholder: E.intl.string(a6(Z) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: Z.question }),
                          disabled: W,
                          rows: 1,
                          className: ib.Pu,
                          "data-conjure-clarification-other": Z.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(ib.$O, { [ib.fI]: e$ && !eO, [ib.Oh]: eO }),
        role: "dialog",
        "aria-label": Z.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": M && !F ? "true" : void 0,
        "data-step": Y,
        tabIndex: -1,
        onKeyDown: eH,
        children: [
            (0, a.jsxs)("div", {
                className: ib.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: G,
                        className: ib.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${Z.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : m,
                                className: h()(aW.TK, ib.R_, { [ib.TB]: "exit" === em, [ib.JU]: "enter" === em }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, a.jsx)("div", {
                                      className: aW.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: eg,
                                          children: (0, a.jsx)(tk.K, {
                                              icon: ee ? nd.t : rs.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Q({ id: Z.id, expanded: !ee }),
                                              "aria-label": eg,
                                              "aria-controls": `${Z.id}-label`,
                                              "aria-expanded": ee,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(aW.gb, aW.Q7),
                                      onClick: ez,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eY.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: ib.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, a.jsxs)("div", {
                            className: ib.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: H,
                                    className: ib.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Z.id}-label`,
                                    "data-direction": L?.direction,
                                    "data-parity": null == L ? void 0 : L.moves % 2,
                                    children: [
                                        er
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: ib.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iF, {
                                            projectId: n,
                                            question: Z,
                                            selected: es,
                                            disabled: W,
                                            onPick: (e) =>
                                                er
                                                    ? b((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Z.id]:
                                                                  ((n = t[Z.id] ?? iU),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Z.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eN(e),
                                            own: eT,
                                        }),
                                        null != Z.input
                                            ? (0, a.jsx)(iE, {
                                                  projectId: n,
                                                  question: Z,
                                                  value: eS,
                                                  disabled: W,
                                                  onChange: eI,
                                                  onFocus: e_,
                                                  onBlur: eM,
                                                  fallback: !1 === Z.allow_custom ? eV : null,
                                              })
                                            : null,
                                        !0 === Z.link && eS.length > 0 && null == I[Z.id]
                                            ? (0, a.jsx)("div", {
                                                  className: ib.X_,
                                                  children: (0, a.jsx)(aQ.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: E.intl.string(S.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => _((e) => ({ ...e, [Z.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === Z.link && eS.length > 0 && null != I[Z.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: ib.$y,
                                                  onFocus: e_,
                                                  onBlur: eM,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(a2, {
                                                          label: E.intl.string(S.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: I[Z.id] ?? "auto",
                                                          disabled: W,
                                                          onChange: (e) => _((t) => ({ ...t, [Z.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != Z.note
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: ib.aK,
                                                  children: Z.note,
                                              })
                                            : null,
                                        !1 === Z.allow_custom ? null : eV,
                                    ],
                                }),
                                null == D
                                    ? null
                                    : (0, a.jsx)(
                                          iB,
                                          {
                                              projectId: n,
                                              question: D.question,
                                              draft: D.draft,
                                              selected: D.selected,
                                              ownImage: D.ownImage,
                                              ownSelected: D.ownSelected,
                                              direction: D.direction,
                                              disabled: W,
                                          },
                                          D.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            X > 1 || er || ea || null != Z.input || null != u || a6(Z)
                ? (0, a.jsxs)("div", {
                      className: aW.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  X > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: Y + 1, total: X })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: aW.zt,
                              children: [
                                  ek
                                      ? (0, a.jsx)(aQ.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: c ?? E.intl.string(S.default.Pk5lfA),
                                            onClick: ew ?? ey,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  d
                                      ? null
                                      : (0, a.jsx)(eL.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eG
                                                ? (o ?? E.intl.string(E.t.geKm7t))
                                                : E.intl.string(S.default.w1nRmT),
                                            disabled: !eU,
                                            onClick: eK,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eG ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var iH = n(557744),
    iV = n(223347),
    iW = n(894443),
    iX = n(525530);
function iY(e) {
    return (0, o.bG)([ek.Ay], () => ek.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let iZ = "scope-setup:q0",
    iJ = `${iZ}:0`,
    iQ = `${iZ}:1`;
function i0(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(e), [e]),
                n = (0, aF.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, c] = i.useState(null),
                d = t?.install_scope_setup,
                m = "server" === l || (null == l && "choose_server" === d),
                f = t?.guild_id,
                h = i.useMemo(
                    () =>
                        m
                            ? {
                                  id: n.length > 0 ? "server-setup" : "server-setup-empty",
                                  questions: [
                                      {
                                          id: "server-setup:q0",
                                          question: E.intl.string(
                                              n.length > 0 ? S.default.ZWXDeI : S.default["u5+Qhu"],
                                          ),
                                          recommendation_reason: "",
                                          allow_custom: !1,
                                          options:
                                              n.length > 0 ? [] : [{ id: iJ, label: E.intl.string(S.default.qLYOpH) }],
                                          ...eM(n, f),
                                      },
                                  ],
                              }
                            : {
                                  id: "scope-setup",
                                  questions: [
                                      {
                                          id: iZ,
                                          question: E.intl.string(S.default.ickKBI),
                                          recommendation_reason: "",
                                          allow_custom: !1,
                                          options: [
                                              {
                                                  id: iJ,
                                                  label: E.intl.string(S.default.qLYOpH),
                                                  detail: E.intl.string(S.default.QSKvUE),
                                              },
                                              {
                                                  id: iQ,
                                                  label: E.intl.string(S.default.QV5C7b),
                                                  detail: E.intl.string(S.default["ZzHR4/"]),
                                              },
                                          ],
                                      },
                                  ],
                              },
                    [m, n, f],
                );
            if (null == d) return null;
            if (null == t || !(0, ek.PV)(t))
                return { clarification: eT(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), c(null));
                try {
                    await eS(`settle:${e}`, async () => {
                        try {
                            await eP(e, t, n);
                        } catch (t) {
                            if (409 !== t.status) throw t;
                            await (0, R.U1)(e);
                        }
                    });
                } catch (e) {
                    (s(!1), c(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: h,
                readOnly: !1,
                onSubmit: a
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          if (null == n) return;
                          let l = n.entities?.[0]?.id;
                          n.option_ids.includes(iQ) ? r("server") : null != l ? g("guild", l) : g("user", null);
                      },
                submitText: E.intl.string(E.t["cY+Oob"]),
                onBack: m && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                failure: null == u ? null : E.intl.string("server" === u ? S.default["XXKd+7"] : S.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(iK, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(
                        iK,
                        {
                            projectId: t,
                            clarification: n.clarification,
                            onSubmit: n.onSubmit,
                            submitText: n.submitText,
                            onBack: n.onBack,
                        },
                        n.clarification.id,
                    ),
                    null != n.failure
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function i1(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(t), [t]),
                c = (0, aF.z9)("ConjureScopeSwitchCard"),
                [d, m] = i.useState(!1),
                [f, h] = i.useState(null),
                g = u?.guild_id,
                p = i.useMemo(() => {
                    let [e] = n.questions,
                        t = E.intl.formatToPlainString("guild" === a ? S.default["jh/iy+"] : S.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...eM(c, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: E.intl.string(S.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, c, g, a]);
            if (null == u || !(0, ek.PV)(u))
                return { clarification: eT(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (m(!0), h(null));
                try {
                    var l;
                    await ((l = n.id),
                    eS(`switch:${t}:${l}`, async () => {
                        await eP(t, a, e);
                        let n = "guild" === a ? S.default["8+EcCu"] : S.default["U7+Yeh"];
                        if (!(0, P.sendUserMessage)(t, E.intl.string(n))) throw Error("Not connected");
                    }));
                } catch (e) {
                    (m(!1), h(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: p,
                readOnly: !1,
                onSubmit: d
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0]?.entities?.[0];
                          "user" === a ? x(null) : null != n && x(n.id);
                      },
                submitText: E.intl.string("guild" === a ? S.default.Ua7yKM : S.default.TVRkVh),
                onBack: d
                    ? void 0
                    : function () {
                          (h(null), (0, ew.b4)(t, "keep install scope", (e) => e.sendKeepInstallScope()))
                              ? r()
                              : h("failed");
                      },
                backText: E.intl.string("guild" === a ? S.default["4WnIqd"] : S.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == f ? null : E.intl.string("locked" === f ? S.default.irUT0N : S.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              iK,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      iK,
                      {
                          projectId: t,
                          clarification: n.clarification,
                          headingLines: 1,
                          onSubmit: n.onSubmit,
                          submitText: n.submitText,
                          onBack: n.onBack,
                          hideSubmit: n.hideSubmit,
                          backText: n.backText,
                      },
                      n.clarification.id,
                  ),
                  null != n.failure
                      ? (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var i2 = n(564963);
let i3 = new Set(["select", "channel", "role", "user"]);
function i4(e, t) {
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
function i5(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let i7 = new Set(),
    i6 = new Set();
function i8(e) {
    return (
        i6.add(e),
        () => {
            i6.delete(e);
        }
    );
}
function i9() {
    return i.useSyncExternalStore(i8, () => i7);
}
function se(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, aj.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function st(e, t, n) {
    if (!n || null == t) return !1;
    let l = i5(e, t);
    return l.length > 0 && !i4({ keys: l }, t);
}
var sn = n(782973),
    sl = n(1665),
    sr = n(11120),
    sa = n(411236);
function si(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = i9(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!i7.has(n)) for (let e of ((i7 = new Set([...i7, n])), i6)) e();
                    } else a(!0);
                }, [n]),
                c = (0, o.bG)([tP.A], () => st(t, tP.A.getSettings(e), s), [e, t, s]);
            return {
                done: c,
                superseded: (0, o.bG)([X.A], () => null != n && se(X.A.getMessages(e)).has(n), [e, n]),
                summary: (0, o.yK)(
                    [tP.A, a4.A],
                    () => {
                        var n;
                        let l = tP.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => a4.A.getChannel(e)?.name ?? null),
                              i5(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: E.intl.formatToPlainString(S.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return E.intl.string(S.default.CJq1rY);
                                                      case "checkbox":
                                                          return E.intl.string(
                                                              !0 === t ? S.default.nXtpn3 : S.default["0vfaMW"],
                                                          );
                                                      case "select":
                                                          return l
                                                              .map(
                                                                  (t) =>
                                                                      e.options?.find((e) => e.value === t)?.label ?? t,
                                                              )
                                                              .join(", ");
                                                      case "channel":
                                                          return l
                                                              .map((e) => {
                                                                  let t = n(e);
                                                                  return null != t
                                                                      ? `#${t}`
                                                                      : E.intl.string(S.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? E.intl.string(S.default.nEv677)
                                                              : E.intl.string(S.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return E.intl.string(S.default.Fw9G9A);
                                                      default:
                                                          return l.join(", ");
                                                  }
                                              })(t, r, n),
                                          }),
                                      },
                                  ];
                              })).map((e) => e.text);
                    },
                    [e, t],
                ),
                markSaved: u,
            };
        })(t, n, l),
        f = null == r && u;
    if (c && !f)
        return (0, a.jsx)("article", {
            className: sa.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["+uXDk+"]),
            }),
        });
    if (f)
        return (0, a.jsxs)("article", {
            className: sa.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: sa.Ol,
                    children: [
                        (0, a.jsx)(nI.y, { size: "xs", color: k.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: E.intl.string(S.default.AxBLLy),
                        }),
                    ],
                }),
                d.length > 0
                    ? (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: d.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let g = n.keys?.length === 1 && n.keys[0] === sn.B,
        p = null != n.note && "" !== n.note ? n.note : g ? null : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(sr.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: m,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let o = (0, a.jsx)(eL.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: sa.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          null != p
                              ? (0, a.jsx)(sl.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: sa.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aW.nd, aW.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aW.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aW.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aW.gb, aW.Q7),
                                      onClick: r,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(eY.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: sa.DQ,
                              children: [
                                  null != p
                                      ? (0, a.jsx)(sl.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: aW.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: sa.xE,
                                      children: E.intl.string(S.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: aW.zt,
                                      children: [
                                          (0, a.jsx)(eL.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: E.intl.string(S.default["9J3OG8"]),
                                          }),
                                          o,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    });
}
var ss = n(935208),
    so = n(932111),
    su = n(404373);
function sc(e) {
    return "" !== el.getDraft(e).trim();
}
var sd = n(29080);
function sm(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, av.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, av.Lf)(r) }),
    };
}
var sf = n(62617),
    sh = n(780171);
let sg = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    sp = {
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
    sx = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, sf.Z)(),
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
                        () => (0, sf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, sf.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: sh.u, tint: "var(--illo-purple-40)" },
    };
function sv(e) {
    return { ...sx[e], name: E.intl.string(sp[e]()) };
}
function sj(e) {
    return sg.includes(e) ? sv(e) : void 0;
}
function sb(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % sg.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, sg[(t + n) % sg.length]);
            }),
            l
        );
    })(e))
        t.set(n, sv(l));
    return t;
}
var sy = n(615839);
function sw(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var sk = n(60160),
    sN = n(16634);
function sC(e) {
    let t = (0, av.SY)(e.steps);
    return null != t ? (0, av.WQ)(t) : sw(e.task);
}
function sA(e) {
    let t = sb(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? sj(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: sw(e.task),
                      todoId: e.task.todoId,
                      line: sC(e),
                  },
              ];
    });
}
function sS(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, av.SY)(n.steps),
        d = u
            ? sC(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(sw(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, sy.MB)(e.durationMs),
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
                                    className: aO.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            sN.A,
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
                                      className: aO.iq,
                                      children: (0, a.jsx)(sk.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(ak.A, {
        glyph: (0, a.jsx)(aN.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: sw(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: aO.nC,
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
var sE = n(998445),
    sI = n(643210),
    s_ = n(648127),
    sM = n(372795),
    sT = n(163897);
let sP = "conjure-browser-viewer";
function sR(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [sI.A],
            () =>
                n.flatMap((e) => {
                    let n = sI.A.getTab(t, e);
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
        className: sT.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sL, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sL(e) {
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
        u = (0, tq.useHasModalOpen)(sP),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        g = (0, s_.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(sT.Nr, f && sT.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tq.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: sP },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: sT.Gt,
                children: [
                    (0, a.jsx)(sM.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: sT.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: sT.qf,
                              children: (0, a.jsx)(sE.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: sT.HS,
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
                className: sT.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(sT.W9, f && sT.oM) }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var s$ = n(268409);
let sD = new WeakMap(),
    sO = new WeakMap();
function sq(e) {
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
            [X.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = sD.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = sO.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), sO.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (sD.set(e, n), n);
                })(X.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: s$.h, children: (0, a.jsx)(sR, { projectId: t, sessionIds: u }) });
}
var sz = n(469393);
function sF(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lX.lG)(t.authored_at);
    return (0, a.jsx)(aS, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: sz.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sz.z,
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
                    ? (0, a.jsx)(eL.$, {
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
var sU = n(237528),
    sG = n(714917),
    sB = n(463660),
    sK = n(970211);
function sH(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, o.bG)([sG.A], () => (null != e ? sG.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, u] = i.useState(null),
                [c, d] = i.useState(!1);
            (i.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => d(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        (async function (e, l) {
                            let r;
                            try {
                                r = await (0, sB.Mg)(e, l);
                            } catch {
                                r = t;
                            }
                            n || a(r);
                        })(e, l),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, l, t]));
            let m = null != l ? r : null,
                f = null == l || (null != m && m === s) ? t : m,
                h = i.useCallback(() => {
                    f === m && u(m);
                }, [f, m]);
            return { src: null == e || null != n || c ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp");
    return null == n
        ? null
        : (0, a.jsx)("img", { className: h()(sK.L, { [sK.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
}
var sV = n(155718);
function sW(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let sX = ["command", "user_command", "message_command", "message"],
    sY = new Set([sV.kc.CHAT, sV.kc.USER, sV.kc.MESSAGE]);
function sZ(e) {
    return e.type ?? sV.kc.CHAT;
}
function sJ(e) {
    return sY.has(sZ(e));
}
function sQ(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function s0(e, t) {
    let n = sX.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !sQ(e)), ...n.filter(sQ)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || sQ(r) || l.push(r);
    }
    return sX.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function s1(e, t, n) {
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
    let s = e.commands.filter(sJ).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sZ(e)) {
                    case sV.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case sV.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(sQ),
        u = a.length > 0 ? s0([...a, ...o], !0) : s0("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var s2 = n(377941),
    s3 = n.n(s2);
function s4(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function s5(e) {
    return e.type === sV.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === sV.kc.USER || e.type === sV.kc.MESSAGE
          ? ""
          : "/";
}
let s7 = {
        [lQ.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lQ.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lQ.q7.ACTIVITY]: S.default["3/aHX6"],
        [lQ.q7.OVERLAY]: S.default["rPpf5/"],
        [lQ.q7.PROFILE_WIDGET]: null,
        [lQ.q7.AUTOMOD]: null,
        [lQ.q7.BOT]: null,
        [lQ.q7.APPLICATION_COMMANDS]: null,
    },
    s6 = [lQ.q7.ACTIVITY, lQ.q7.APP_CHANNEL, lQ.q7.VOICE_CHANNEL, lQ.q7.OVERLAY];
function s8(e) {
    return s6.find((t) => sW(e, t)) ?? null;
}
let s9 = { mana: S.default.d9bW4W, custom: S.default.AV87WX },
    oe = 1920 / 1018;
function ot(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let on = ot(24, 1018),
    ol = ot(24, 1920);
function or(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var oa = n(176999),
    oi = (((l = {}).IMAGE = "image"), l),
    os = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    oo = n(598748),
    ou = n(773669);
let oc = [],
    od = {},
    om = {};
function of(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function oh(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: oi.IMAGE,
        visibility: os.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var og = n(127258),
    op = n(803306),
    ox = n(320095),
    ov = n(963852),
    oj = n(95701),
    ob = n(889227),
    oy = n(427262);
let ow = new oj.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" });
function ok(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([a7.default], () => a7.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, op.nj)(new ob.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let oN = /^@\S+/,
    oC = [S.default["3eTjcV"], S.default.l3j5nS];
var oA = n(97808),
    oS = n(778712),
    oE = n(46054),
    oI = n(200700);
let o_ = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    oM = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    oT = ["blocked", "alert", "allowed"],
    oP = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function oR(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, oI.getFriendlyDurationString)(n))
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
var oL = n(984097),
    o$ = n(13673);
let oD = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function oO(e) {
    let { example: t } = e,
        n = oR(t);
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
let oq = ["glazedgamer", "sprinkles", "donutking"];
function oz(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = o_[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(oL.nM, { [h()(oL.HV, o$.DX)]: s }),
        children: [
            (0, a.jsx)(aC.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: oL.my,
                children: (0, a.jsx)(oA.eu, {
                    src: (0, eD.AE)(void 0, void 0),
                    size: oS._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: oL.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), oE.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(oO, { example: n }) : null,
                ],
            }),
        ],
    });
}
function oF(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = oM[t.section],
        s = new Set(t.examples.map(oR)),
        o = 1 === s.size ? t.examples.map(oR)[0] : null;
    return (0, a.jsxs)("div", {
        className: oL.UO,
        children: [
            (0, a.jsxs)("div", {
                className: oL.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: oD[r.tone],
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
                                      className: oL.IQ,
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
                className: oL.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(oz, { example: e, username: oq[(n + t) % oq.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function oU(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            oT
                .map((e) => ({ section: e, examples: t.filter((t) => oP[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: oL.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: oL.hk,
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
                    oF,
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
var oG = n(276293),
    oB = n(460905),
    oK = n(110384),
    oH = n(633018),
    oV = n(763754),
    oW = n(217424),
    oX = n(194085),
    oY = n(20851),
    oZ = n(692508),
    oJ = n(798819);
function oQ(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(oJ.item, oJ.labelContainer, oJ.colorDefault, {
            [oJ.focused]: !0 === t.highlighted,
            [oJ.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: oJ.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: oJ.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(oJ.label, oZ.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: oJ.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: oJ.icon }),
                  })
                : null,
        ],
    });
}
function o0(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, oZ.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: oK.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(oJ.menu, oZ.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: oJ.scroller,
            children: [
                (0, a.jsx)(oQ, { item: s }),
                (0, a.jsx)("div", { className: oJ.separator }),
                (0, a.jsx)(oQ, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var o1 = n(381941);
function o2() {}
function o3(e) {
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
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, o.bG)([a7.default], () => a7.default.getCurrentUser())),
        (n = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, o.bG)([tB.A], () => tB.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([a7.default], () => (null != l ? a7.default.getUser(l) : void 0), [l])),
        (d = ok("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = ok("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ok("31339", (0, oy.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == f
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
                                      i = (0, ox.rh)({
                                          ...(0, ov.Ay)({
                                              channelId: ow.id,
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
                                                        type: og.G.APPLICATION_COMMAND,
                                                        user: (0, ov.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(oN, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: f },
                              {
                                  targetMessage: E.intl.string(S.default["y+QYes"]),
                                  memberMessage: E.intl.string(S.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let w = ow.name;
    return (0, a.jsxs)("div", {
        className: oZ.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: oZ.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oG.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(oZ.TE, `group-spacing-${o1.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? oZ.Rz : void 0,
                            children: [
                                (0, a.jsx)(oY.A, {
                                    message: n,
                                    channel: ow,
                                    author: (0, oV.FT)(n.author, ow),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(oW.A, { message: n, channel: ow }) : void 0,
                                    usernameClassName: r?.target === "user" ? oZ.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: oZ.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(oX.Ay, {
                                              children: [
                                                  (0, a.jsx)(oX.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: oB.n,
                                                      onClick: o2,
                                                  }),
                                                  (0, a.jsx)(oX.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: oK.W,
                                                      onClick: o2,
                                                  }),
                                                  (0, a.jsx)(oX.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: tN.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: o2,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? oZ.ET : oZ.je,
                                          inert: !0,
                                          children: (0, a.jsx)(o0, {
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
                className: oZ.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oH.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: E.intl.formatToPlainString(E.t["8lzR/R"], { channel: `#${w}` }),
                    }),
                ],
            }),
        ],
    });
}
var o4 = n(332173);
function o5(e) {
    let { name: t } = e;
    return (0, a.jsxs)(o4.A, { children: ["/", t] });
}
function o7(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(s3());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(o5, { name: e.name }, e.start) : e.text));
}
n(827669);
var o6 = n(757789),
    o8 = n(26137);
let o9 = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var ue = n(573634);
let ut = {
    frame: eO.GameControllerIcon,
    overlay_widget: o6.V,
    user_widget: o8.r,
    bot: eU.RobotIcon,
    commands: eU.RobotIcon,
    automod: eF.ShieldIcon,
};
function un(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(ue.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function ul(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: ue.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: ue.jw,
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
function ur(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: ue.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(ue.Vo, ue.G),
                children: (0, a.jsx)(eq.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: ue.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function ua(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: ue.wZ,
        children: t.map((e, t) => {
            let n = s5(e),
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
                                ? (0, a.jsx)(o5, { name: e.name })
                                : (0, a.jsx)(o4.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function ui(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: ue.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: ue.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(o7, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function us(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? eq.k : ut[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : o9[t.kind]);
    return (0, a.jsxs)("section", {
        className: ue.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: ue.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: ue.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: ue.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(o7, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(ui, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: ue.PG, children: r }) : null,
        ],
    });
}
function uo(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: ue.aN,
        children: [
            (0, a.jsxs)("div", {
                className: ue.Lv,
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
                                let n = t.map(s3()).join("|");
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
                            (0, a.jsx)("div", { className: ue.yF, role: "separator" }),
                            (0, a.jsx)(us, {
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
                                                if (t.surfaces.includes(lQ.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lQ.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lQ.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        un,
                                                        {
                                                            className: ue.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: ue.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        ur,
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
                                                            un,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(ul, { labels: r }),
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
                                                              un,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(ua, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(s4) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            un,
                                                            { caption: n, children: (0, a.jsx)(ul, { labels: l }) },
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
var uu = n(633075),
    uc = n(946356),
    ud = n(58216),
    um = n(27399);
function uf(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([a7.default], () => a7.default.getCurrentUser()),
        r = i.useMemo(() => new uu.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: um.H,
              children: (0, a.jsx)(uc.A.Overlay, {
                  className: um.w,
                  children: (0, a.jsx)(ud.A, {
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
var uh = n(443863);
function ug(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: ot(i.width * t, 1920), height: ot(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sH, { projectId: n }),
            (0, a.jsx)("div", {
                className: uh.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": on,
                    "--custom-conjure-plan-overlay-widget-end": ol,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: uh.M7, onError: s }),
            }),
        ],
    });
}
function up(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, ei.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, iP.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function ux(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: o } = (0, iR._)(t, r);
    return s
        ? null
        : (0, a.jsx)(C.D, {
              className: uh.xX,
              onClick: () => up(t, [{ id: r, alt: l }], 0),
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: uh.sN, onError: o }),
          });
}
function uv(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: c } = (0, iR._)(t, r),
        [d, m] = i.useState(!1),
        [f, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                c = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!c) return;
                let e = setInterval(() => a((e) => (e + 1) % oC.length), 4e3);
                return () => clearInterval(e);
            }, [c]);
            let m = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                f = i.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: oC.map((e) => E.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: d || f });
    if (u) return null;
    let b = E.intl.string(S.default.mjryK4),
        y = E.intl.string(S.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: uh.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(C.D, {
                className: h()(uh.xX, uh.nj, { [uh.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(oe) },
                onClick: () => up(t, [{ id: r, alt: b }], 0),
                "aria-label": E.intl.string(S.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: uh.Ac, onError: c })
                          : (0, a.jsx)(ug, { projectId: t, src: s, alt: y, size: l, onError: c }),
            }),
            (0, a.jsx)("div", {
                className: uh._4,
                role: "group",
                "aria-label": E.intl.string(S.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        C.D,
                        {
                            className: h()(uh.c, { [uh.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(v.E, {
                                variant: "text-xs/medium",
                                color: "none",
                                tag: "span",
                                children: e,
                            }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function uj(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: o } = (0, iR._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(C.D, {
                  className: uh.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: uh.rA, onError: o }),
              }),
          });
}
function ub(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: E.intl.formatToPlainString(S.default.xFgQ8L, { number: t + 1 }) };
        });
    return null == n.style && 0 === l.length
        ? null
        : (0, a.jsxs)("section", {
              className: uh.Op,
              children: [
                  null != n.style
                      ? (0, a.jsx)(sU.v, {
                            text: E.intl.string(s9[n.style]),
                            variant: "custom" === n.style ? "grayMedium" : "blurpleLight",
                        })
                      : null,
                  l.length > 0
                      ? (0, a.jsxs)("div", {
                            className: uh.uW,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    children: E.intl.string(S.default.ubBJcy),
                                }),
                                (0, a.jsx)("ul", {
                                    className: uh.Ft,
                                    children: l.map((e, n) => {
                                        let { id: r, alt: i } = e;
                                        return (0, a.jsx)(
                                            uj,
                                            { projectId: t, id: r, alt: i, onOpen: () => up(t, l, n) },
                                            r,
                                        );
                                    }),
                                }),
                            ],
                        })
                      : null,
              ],
          });
}
function uy(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        f,
        h,
        { projectId: g, proposal: p, version: x, onApprove: j } = e,
        { botExchanges: b } =
            ((n = sW(p, lQ.q7.APPLICATION_COMMANDS)),
            (l =
                sW(p, lQ.q7.BOT) || n
                    ? null != p.bot
                        ? p.bot.interaction
                        : n && p.commands.some(sJ)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : s1(p, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [p, l],
            )),
            { botInteraction: l, botExchanges: r }),
        y = (function (e, t) {
            let { widget_config: n, widget_preview: l = om } = t,
                r = (0, o.bG)([ou.default], () => ou.default.locale),
                a = (0, o.bG)([ek.Ay], () => {
                    let t = ek.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(od);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ei.PK)(e, l.id).then(
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
                                                          ...of(n),
                                                          ...(null != n.fallback ? { fallback: of(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = oa.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[oo.m.WIDGET_TOP] || null == i[oo.m.WIDGET_BOTTOM]
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
                                                                    type: oa.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: oa.oG.NUMBER, value: a })
                                                                : (r[e] = { type: oa.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(oh),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: oc,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(g, p),
        w = x?.superseded === !0,
        k = p.what_changed?.trim() ?? "",
        N =
            ((t = p.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === s5(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = s8(p))
                    ? null
                    : (p.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (c = p.design_image) && c.id !== or(p)?.id ? c : null),
            (m = or(p)),
            (f =
                p.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? u),
            (h =
                p.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? u),
            {
                ui: null != d && null != f ? { experienceId: f, design: d } : null,
                overlay:
                    null != m && null != h ? { experienceId: h, design: m, size: l1(p.overlay_widget ?? null) } : null,
            }),
        A = i.useMemo(
            () =>
                p.commands.some(sJ)
                    ? s1({ ...p, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [p],
        ),
        I = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(g)?.name, [g]),
        _ =
            w && null != x
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: x.version })
                : E.intl.string(S.default["3b6e7o"]),
        M = w ? (0, a.jsx)(aI, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(a_, {
        title: _,
        meta: M,
        superseded: w,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: uh.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: uh.Qs,
                children: (0, a.jsx)(uo, {
                    appName: I ?? p.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(o7, { text: p.summary, commandNames: N }),
                            }),
                            (0, a.jsx)(ub, { projectId: g, proposal: p }),
                            "" !== k
                                ? (0, a.jsxs)("section", {
                                      className: uh.uW,
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
                                              children: (0, a.jsx)(o7, { text: k, commandNames: N }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: p,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === C.ui?.experienceId
                                            ? (0, a.jsx)(ux, {
                                                  projectId: g,
                                                  design: C.ui.design,
                                                  alt: E.intl.string(null == (t = s8(p)) ? S.default["3/aHX6"] : s7[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(uv, {
                                                  projectId: g,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != y ? (0, a.jsx)(uf, { ...y }) : null;
                            case "automod":
                                return null != p.automod && p.automod.examples.length > 0
                                    ? (0, a.jsx)(oU, { automod: p.automod })
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
                                        (r = l.some((e) => "command" === e.kind || sQ(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, b, A);
                                return t.length > 0 ? (0, a.jsx)(o3, { projectId: g, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: N,
                }),
            }),
            null == j || w
                ? null
                : (0, a.jsxs)("div", {
                      className: uh.qr,
                      children: [
                          (0, a.jsx)(eL.$, {
                              variant: "primary",
                              size: "sm",
                              text: E.intl.string(S.default["6S+wRM"]),
                              onClick: j,
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
var uw = n(289565);
function uk(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: uw.m, children: n })
        : (0, a.jsxs)("div", {
              className: uw.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tk.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: eY.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function uN(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function uC(e, t) {
    return null != e && uN(t, e.status);
}
let uA = new WeakMap();
var uS = n(175841),
    uE = n(27232),
    uI = n(505930),
    u_ = n(385081);
let uM = "conjurePublishRatings",
    uT = [1, 2, 3, 4, 5],
    uP = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function uR(e) {
    return E.intl.string(uP[e]);
}
let uL = new Set(),
    u$ = 0;
function uD() {
    return G.w.get(uM) ?? {};
}
function uO(e, t) {
    return uD()[e]?.[t] ?? null;
}
function uq(e) {
    return (uL.add(e), () => uL.delete(e));
}
function uz(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: o,
        } = (function (e) {
            let [t, n] = i.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, u_.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(tD.a, {
        ...n,
        title: u,
        actions: [
            {
                variant: "primary",
                text: E.intl.string(S.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (o(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(aV.f, {
            label: u,
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
var uF = n(54100);
function uU(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: uF.mo,
        role: "status",
        children: [
            (0, a.jsx)(uS.SparklesIcon, { size: "xs", color: "currentColor", className: uF.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? E.intl.string(S.default["nIc9/M"])
                        : 3 === t
                          ? E.intl.string(S.default.ausj8U)
                          : E.intl.string(S.default.HilSjw),
            }),
        ],
    });
}
function uG(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(uq, () => u$),
                {
                    rating: uO(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != uO(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, u_.gw)(i);
                            let s = uD();
                            return (G.w.set(uM, { ...s, [t]: { ...s[t], [n]: l } }), u$++, uL.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, g] = i.useState(!1),
        p = i.useId(),
        x = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => g(!1), 420);
            return () => clearTimeout(e);
        }, [f]),
        null != s && !f)
    )
        return (0, a.jsx)(uU, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        w = b || (null == d && null != u);
    function k(e) {
        if (b) return;
        (c(e), m(null), g(!0));
        let t = o(e);
        null != t && (0, tq.openModal)((e) => (0, a.jsx)(uz, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: uF.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: uF.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(uF.Pf, { [uF.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    uT.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(uF.Pf, { [uF.KH]: y === e }),
                                children: uR(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: uF.uf,
                children: uT.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? uE.StarIcon : uI.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: uF.uK,
                            onMouseEnter: () => {
                                b || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: p,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        j.current ? c(e) : k(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), k(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: uF.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: uR(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(uF.d4, { [uF.cO]: t, [uF.Ng]: t && w }),
                                        children: (0, a.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && w ? `picked-${y}` : "idle",
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
function uB(e) {
    let { projectId: t, publish: n } = e,
        l = rI(t, n);
    return (0, a.jsx)(eL.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function uK(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tT.Ay)(t);
    return null != r && uC(r, l)
        ? (0, a.jsx)(uk, {
              children: (0, a.jsxs)(tO.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(uB, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(uG, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var uH = n(303345),
    uV = n(44255),
    uW = n(416473),
    uX = n(289830);
function uY(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [ek.Ay],
                    () => {
                        let t = ek.Ay.getProject(e);
                        return null != t && (0, ek.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, uW.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof uH.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, uV.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, uV.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(aS, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: uX.r,
            children: [
                (0, a.jsxs)("div", {
                    className: uX.z,
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
                    ? (0, a.jsx)(eL.$, {
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
var uZ = n(989271);
function uJ(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(uZ.nM, { [uZ.f1]: s, [uZ.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: uZ.jo,
                children: [
                    n
                        ? (0, a.jsx)(nW.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: uZ.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: uZ.G9,
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
function uQ(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(aS, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                uJ,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var u0 = n(530557),
    u1 = n(872162),
    u2 = n(202723);
function u3(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tq.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: u0.R })), [r.fields]),
        d = (0, i2.bB)(l, s),
        m = h()(u2.Lo, { [u2.jY]: d });
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
                        (0, a.jsx)(u1.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: u2.Lo,
                      children: (0, a.jsx)(u1.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: u2.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: u2.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nI.y, {
                                            size: "xs",
                                            color: k.A.colors.ICON_FEEDBACK_POSITIVE,
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
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        E.intl.formatToPlainString(S.default["Z+FC3j"], {
                                            label: e,
                                            value: E.intl.string(S.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: u2.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(sl.A, {
                            text: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(u1.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: u2.sq,
                            children: (0, a.jsx)(eL.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var u4 = n(919790),
    u5 = n(908492),
    u7 = n(971824),
    u6 = n(162052),
    u8 = n(165648);
function u9(e) {
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
        x = i.useMemo(() => (0, av.Jf)(n, l), [n, l]),
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
            className: aO.pj,
            "data-live": !1,
            children: (0, a.jsx)(ak.A, {
                glyph: (0, a.jsx)(sd.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, av.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = sb(w.map((e) => e.taskId)),
        N = !g && (l || w.some((e) => "running" === e.task.status)),
        C = sA(w);
    return (0, a.jsxs)("ol", {
        className: aO.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(ay.Ay, {
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
                let l = null != e.task.helperMark ? sj(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          sS,
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
            (0, a.jsx)(sq, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: aO.YO,
                      children: (0, a.jsx)(a$, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function ce(e) {
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
            settingsRequest: g,
            settingsAskId: p,
            publishCta: x,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: w,
            sideReply: k = !1,
            sideReplyAcknowledges: N,
            hoistedProse: C = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: I,
            onRestoreProposal: _,
            publishScheduleProposal: M,
            publishScheduleProposalCurrent: T = !1,
        } = e,
        P = i.useMemo(
            () => sm({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: R, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        O = (C ? A : void 0) ?? P.attachmentsHost,
        q = $ && !C,
        z = null == u ? null : (0, a.jsx)(u4.A, { projectId: t, attachments: u }),
        F = null == z ? null : (0, a.jsx)("div", { className: aO.MT, children: z }),
        U = k
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
                  })(N),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: aO.ue,
        children: [
            R.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: aO.dO,
                      children: R.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: aO.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: u8.PT,
                                          children: (0, u5.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === O && e === L ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(uy, { projectId: t, proposal: r, version: s, onApprove: w })
                : q
                  ? (0, a.jsxs)("div", {
                        className: h()(aO.ky, u6.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(u8.PT, aO.cW),
                                children: (0, u5.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? F : null,
                            U,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(aO.ky, u6.XR, { [u7.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(u3, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: h()(aO.ky, u6.XR),
                      children: (0, a.jsx)(si, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== O && ("closing" !== O || q) ? null : z,
            null != x ? (0, a.jsx)(uK, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(uQ, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != I ? (0, a.jsx)(sF, { proposal: I, onRestore: _ }) : null,
            null != M ? (0, a.jsx)(uY, { projectId: t, proposal: M, current: T }) : null,
            q ? null : U,
        ],
    });
}
var ct = n(864970),
    cn = n(146806),
    cl = n(475358),
    cr = n(717400),
    ca = n(99677),
    ci = n(655098),
    cs = n(234320),
    co = n(191023);
function cu(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(nr.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lM.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(co.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lM.OY,
                    children: (0, a.jsx)(aJ.PencilIcon, {
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
            className: ni.o1,
            onClick: () => {
                lA(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(nl.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function cc(e) {
    let { send: t } = e;
    return (0, a.jsxs)(nr.p, {
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
            "uploading" === t.status ? (0, a.jsx)(nn.y, { type: nn.t.SPINNING_CIRCLE_SIMPLE, className: ni.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aQ.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var cd = n(901173),
    cm = n(161431),
    cf = n(280450),
    ch = n(503275),
    cg = n(659280),
    cp = n(351906),
    cx = n(407653),
    cv = n(322915);
function cj(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([cp.A], () => cp.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      cg.Ay.User,
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
                      cg.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(cx.A, { projectId: n, file: e.file, className: cv.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        g = -1 === f ? [] : m.slice(f);
    return (0, a.jsx)(cg.Ay, {
        id: t,
        className: cv.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(cb, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(cb, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function cb(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: cv.Gf, children: n }),
            l,
        ],
    });
}
var cy = n(719442),
    cw = n(355622),
    ck = n(408018),
    cN = n(186306),
    cC = n(323350),
    cA = n(35277),
    cS = n(820066),
    cE = n(683167),
    cI = n(267102),
    c_ = n(259691);
let cM = (0, oj.createChannelRecord)({ id: "1", type: q.rbe.DM });
function cT(e) {
    let t = cS.VW.end(e, []);
    return { anchor: t, focus: t };
}
function cP(e) {
    return (0, cC.WO)(cS.VW.richValue(e), { mode: "raw" });
}
function cR(e, t) {
    ((e.children = (0, ck.x7)(t)), (e.selection = cT(e)), e.onChange());
}
function cL(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(so.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(c_.A, { attachmentId: r }), n] });
}
var c$ = n(497437);
let cD = "text-md/normal",
    cO = null;
function cq(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [g, p] = i.useState(0),
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
            (p(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, cn._R)(m),
                frontTo: 1e3 * (0, cn._R)(h),
                backFrom: 1e3 * (0, cn.T)(m),
                backTo: 1e3 * (0, cn.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [w, k] = i.useState(null),
        N = i.useRef(!1),
        C = i.useCallback(() => {
            (k(N.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        N.current = n;
    }, [n, t]);
    let A = "in" === w ? x.backFrom : x.frontFrom,
        I = "out" === w ? x.frontTo : x.backTo,
        _ = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        M = t === E.intl.string(S.default.Zc7gML),
        T = r === t && M;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(c$.VT, { [c$.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, I - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != w ? b % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, a.jsx)(cl.e, { shortcut: "tab", className: c$.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ct.o, {
                text: t,
                variant: cD,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: h()(c$.xM, { [c$.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(c$.IS, n || (!_ && "out" === w), u),
            (0, a.jsx)("span", {
                ref: c,
                className: c$.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: cD, tag: "span", children: t }),
            }),
            T
                ? (0, a.jsxs)("span", {
                      className: c$.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: cD, tag: "span", className: c$.xM, children: t }),
                          P(c$.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let cz = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                running: r,
                restoring: s = !1,
                onSend: u,
                onInterrupt: c,
                onUploadFile: d,
                onApprove: m,
                onImport: f,
                onSendToOtherProjects: g,
                suggestion: p,
                questionOpen: x = !1,
                hasPendingContext: v = !1,
                onDraftHasTextChange: j,
                modelSettings: b,
                onModelSettingsChange: y,
            } = e,
            w = n && !l,
            k = (function (e) {
                let t = i.useContext(cI.Ay),
                    [n] = i.useState(() => {
                        let n = (0, cy.ie)();
                        return (
                            (n.children = (0, ck.x7)(e)),
                            (n.selection = cT(n)),
                            (0, cE.a)({
                                editor: n,
                                chatInputType: cw.oU.GENERIC_RICH_TEXTAREA,
                                channel: cM,
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
                                    for (let [t, l] of cS.VW.nodes(e, { at: [], match: cS.l5.isText }))
                                        for (let e of t.text.matchAll(so.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        cN.o.withMergedEntry(e, () =>
                                            cS.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    cA.b.textToVoid(
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
            })(el.getDraft(t)),
            [C, A] = i.useState(() => cP(k));
        (0, M.N$)(C);
        let I = i.useRef(C),
            [_, T] = i.useState(null),
            R = i.useCallback(() => {
                let e = cP(k);
                (e !== I.current && ((I.current = e), W(t, e), A(e)),
                    T(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !cS.ZF.isCollapsed(t)) return null;
                            let [n] = cS.VW.node(e, t.anchor.path);
                            return cS.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(k),
                    ));
            }, [k, t]),
            L = i.useCallback((e) => cR(k, e), [k]),
            $ = "" !== C.trim();
        i.useEffect(() => j?.($), [$, j]);
        let D = i.useRef(t);
        i.useLayoutEffect(() => {
            D.current !== t && ((D.current = t), cR(k, el.getDraft(t)));
        }, [k, t]);
        let O = (0, o.bG)([e$.Ay], () => e$.Ay.isSubmitButtonEnabled),
            [z, F] = i.useState(!1);
        i.useEffect(() => {
            r || F(!1);
        }, [r]);
        let U = i.useRef(null),
            {
                drafts: G,
                addFiles: B,
                pasteFiles: K,
                removeDraft: H,
                settled: V,
                takeRefs: Y,
            } = nu({ projectId: t, surface: "chat", onUploadFile: d }),
            Z = lk.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && lb(n);
            }),
            J = "" !== C.trim() || G.length > 0 || v || Z,
            Q = w && J && V,
            [ee, et] = i.useState(null);
        i.useEffect(() => {
            if (null == ee) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => et(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [ee]);
        let en = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [X.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              X.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, ch.Y_)(l), r.forEach(ch.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([a7.default], () => (null == l ? null : a7.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [a7.default],
                            () => r.map((e) => a7.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([cf.default], () => cf.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            er = (0, cm.rU)(t),
            [ea, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != _ && w ? (0, cd.OG)(_, _.length) : null), [_, w]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, cm.IP)(t);
        }, [ed, t]);
        let em = ed === ea ? null : ec,
            ef = i.useMemo(() => (null == em ? [] : (0, cd.l$)(en, er, em.text)), [em, en, er]),
            eh = em?.text;
        i.useEffect(() => eu(0), [eh]);
        let eg = ef.length > 0,
            ep = Math.min(eo, Math.max(0, ef.length - 1)),
            ex = i.useId(),
            ev = i.useCallback(
                (e) => {
                    let t = ef[e];
                    null != em &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (cA.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                cA.b.insertText(e, `${n} `));
                        })(k, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ef, em, k],
            ),
            ej = i.useCallback(() => {
                if (!Q) return;
                let e = Y(),
                    n = Z
                        ? (function (e) {
                              let t = lC(e);
                              if (null == t || !lb(t)) return null;
                              let n = t.history.present,
                                  l = ao(e);
                              return (
                                  lA(e, (e) => ({ ...e, history: ld, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, P.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (ar.set(i, s),
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
                                              capture: (t) => (0 === t ? l : ao(e)),
                                              composite: (e) => an(e, n),
                                              upload: (t) =>
                                                  (0, ei.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ei.n6)(e, t.id),
                                              send: (n) => (0, P.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      ai(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (ar.delete(i),
                                                          window.setTimeout(() => {
                                                              (ai(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                u(C, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == cO && (cO = document.createElement("canvas").getContext("2d"));
                    let i = cO;
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
                })(cU(eS.current), eq.current, (0, cd.Lj)(C));
                ("" !== l && et(l), L(""), es(null));
            }, [Q, Z, t, C, u, Y, L]),
            eb = i.useCallback(
                (e) => {
                    (e.preventDefault(), ej());
                },
                [ej],
            ),
            ey = i.useCallback(() => {
                null == c || z || (F(!0), c());
            }, [c, z]),
            ew = null == p || "" !== C || !w || s || v ? null : p,
            eN = i.useCallback(
                (e) => {
                    if (eg && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ef.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eu((ep + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ev(ep));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), es(em?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && r && null != c && !z) {
                        (e.preventDefault(), e.stopPropagation(), ey());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ew) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), L(ew));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != m && (e.preventDefault(), m());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ej());
                },
                [ej, m, r, c, z, ey, ew, L, eg, ef.length, ep, ev, em],
            ),
            eC = i.useCallback(
                (e) => {
                    w && K(e);
                },
                [w, K],
            );
        (0, cs.Vo)({
            event: q.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eC(t);
            },
        });
        let eA = i.useCallback(
                (e) => {
                    (B(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [B],
            ),
            eS = i.useRef(null),
            eE = i.useRef(null),
            eI = i.useCallback(() => {
                let e = I.current;
                g?.((0, cd.Lj)(e), () => {
                    I.current === e && L("");
                });
            }, [g, L]),
            e_ = i.useCallback((e) => {
                let t = U.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eM, eT] = i.useState(0),
            [eP, eR] = i.useState(!1);
        i.useEffect(() => {
            if (0 === C.length) return void eR(!1);
            let e = cU(eS.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eT(t);
            }
            eR(!0);
            let t = setTimeout(() => eR(!1), cF);
            return () => clearTimeout(t);
        }, [C]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            eD = eP ? ` ${c$.EB}` : "",
            eO = s
                ? E.intl.string(S.default.qqlUiW)
                : l
                  ? E.intl.string(S.default.GcFRaY)
                  : w
                    ? v
                        ? E.intl.string(S.default.knUjL3)
                        : x
                          ? E.intl.string(S.default.IevBEw)
                          : E.intl.string(r ? S.default["0BJa/0"] : S.default.TEeU7z)
                    : E.intl.string(S.default.zZ9NgM),
            eq = i.useRef(0),
            ez = i.useRef(null),
            eF = i.useCallback((e) => {
                if ((ez.current?.disconnect(), null == e)) return;
                eq.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eq.current = e.clientWidth;
                });
                (t.observe(e), (ez.current = t));
            }, []),
            eU = i.useId(),
            eG = i.useId(),
            eB = null != ew,
            eK = ee ?? ew ?? eO,
            eH = "" === C && "" !== eK;
        return (0, a.jsxs)("form", {
            onSubmit: eb,
            className: c$.DA,
            children: [
                eg
                    ? (0, a.jsx)(cj, {
                          id: ex,
                          projectId: t,
                          suggestions: ef,
                          selectedIndex: ep,
                          onHover: eu,
                          onSelect: ev,
                      })
                    : null,
                G.length > 0 || Z
                    ? (0, a.jsxs)("div", {
                          className: c$.lN,
                          children: [
                              G.map((e) => (0, a.jsx)(nc, { draft: e, onRemove: H }, e.localId)),
                              Z ? (0, a.jsx)(cu, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${c$.wg} ${c$.LP}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${c$.wg} ${c$.L3}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: c$.VA,
                    ref: eS,
                    children: [
                        (0, a.jsx)("input", {
                            ref: U,
                            type: "file",
                            multiple: !0,
                            onChange: eA,
                            className: c$.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(eZ.Y, {
                            targetElementRef: eE,
                            position: "top",
                            align: "left",
                            animation: eZ.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eJ.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eQ.rX, {
                                        children: [
                                            nt.map((e) =>
                                                (0, a.jsx)(
                                                    eQ.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => e_(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, a.jsx)(eQ.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: cr.q,
                                                      leadingAccessory: { type: "icon", icon: cr.q },
                                                      action: f,
                                                  })
                                                : null,
                                            null != g
                                                ? (0, a.jsx)(eQ.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: ca.t,
                                                      leadingAccessory: { type: "icon", icon: ca.t },
                                                      action: eI,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, a.jsx)("button", {
                                    ...e,
                                    ref: eE,
                                    type: "button",
                                    className: `${c$.Y0} ${c$.nu}`,
                                    disabled: !w,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, a.jsx)(t5.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: c$.Qu,
                                    }),
                                });
                            },
                        }),
                        eH
                            ? (0, a.jsx)("div", {
                                  ref: eF,
                                  className: c$.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(cq, { text: eK, offering: eB && null == ee, typed: null != ee }),
                              })
                            : null,
                        (0, a.jsx)(aC.A, { id: eG, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(so.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(ci.A, {
                                editor: k,
                                containerClassName: h()(c$.sq, nN.dv),
                                className: c$.jp,
                                readOnly: !w,
                                canFocus: w,
                                onChange: R,
                                onBlur: () => T(null),
                                onKeyDown: eN,
                                onPaste: eC,
                                renderExtraElement: cL,
                                "aria-labelledby": eG,
                                "aria-describedby": eH ? eU : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eg,
                                "aria-controls": eg ? ex : void 0,
                                "aria-activedescendant": eg ? ((0, cg.aI)(ep) ?? void 0) : void 0,
                            }),
                        }),
                        eH ? (0, a.jsx)(aC.A, { id: eU, children: eO }) : null,
                        (0, a.jsx)("div", {
                            className: c$.Sz,
                            children:
                                r && null != c
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${c$.Y0} ${c$.$E}`,
                                              disabled: z,
                                              onClick: ey,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(sd.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : b?.tierSettings != null && null != y
                                      ? (0, a.jsx)(nw, {
                                            settings: b.tierSettings,
                                            tiers: b.tiers,
                                            choices: b.choices,
                                            disabled: !w,
                                            onChange: y,
                                            className: `${c$.Y0} ${c$.$E}`,
                                            icon: (0, a.jsx)(t7.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        O
                            ? (0, a.jsxs)("div", {
                                  className: c$.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: c$.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: c$.rt,
                                          disabled: !Q,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(t6.SendMessageIcon, {
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
    cF = 1500;
function cU(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var cG = n(709753),
    cB = n(540338),
    cK = n(986109);
let cH = i.createContext(null);
function cV(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(cH),
        [d, m] = i.useState(() => e$.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(cK.xk, { [cK.g5]: d, [cK.Qo]: s, [cK.q3]: o }),
        children: n,
    });
}
let cW = new Map();
function cX(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let cY = "live_behind",
    cZ = "conjureTipDismissals",
    cJ = new Set(),
    cQ = new Set(),
    c0 = 0;
function c1() {
    let e = G.w.get(cZ);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function c2(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return cJ.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && c1().anchor[t]?.[e.id] === n;
        case "app":
            return c1().app[t]?.includes(e.id) === !0;
        case "forever":
            return c1().forever.includes(e.id);
    }
}
function c3(e) {
    return (cQ.add(e), () => cQ.delete(e));
}
let c4 = [12e4];
var c5 = n(292771);
function c7(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
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
    let g = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [g, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: c5.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(c5.qd, e.leaving ? c5.dv : c5.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function c6(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var c8 = n(247171);
function c9(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(c8.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(c8.gutter, c8[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: c8.content, children: i }),
        ],
    });
}
var de = n(830205);
function dt(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(c9, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: de.aK,
        children: (0, a.jsxs)("div", {
            className: de.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: de.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: de.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tk.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eY.P,
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
function dn(e) {
    let { projectId: t } = e,
        n = i.useContext(tT.bI);
    return (0, a.jsx)(dt, {
        icon: eF.ShieldIcon,
        children: E.intl.format(S.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tT.vL)(t, n.guildId));
            },
        }),
    });
}
var dl = n(443865),
    dr = n(716502);
function da(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(c9, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: dr.Nr,
        children: (0, a.jsxs)("section", {
            className: dr.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: dr.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tk.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eY.P,
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
function di(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: dr.DD,
        children: t,
    });
}
function ds(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: dr.rf,
        children: t,
    });
}
function du(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: dr.o1, children: t });
}
var dc = n(95635);
function dd(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = rI(t, n);
    return (0, a.jsx)(dt, {
        icon: dc.UploadIcon,
        onDismiss: l,
        children: E.intl.format(S.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let dm = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && c6(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(dn, { projectId: n });
        },
    },
    {
        id: cY,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: a } = e;
            return null == n ||
                r ||
                null == l ||
                l.publishing ||
                !l.isUpdate ||
                null != l.disabledReason ||
                a < 12e4 ||
                (null != n.publishCta && uC(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(cY)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(dd, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, publish: n, justRemixed: l, noTurnsYet: r, ideasIntroAnchorId: a } = e;
            return null == a || c6(n) ? null : null != t || l || r ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(da, {
                icon: dl.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(di, { children: E.intl.string(S.default.OJlbhX) }),
                    (0, a.jsx)(ds, { children: E.intl.string(S.default["3vJBni"]) }),
                    (0, a.jsx)(du, {
                        children: (0, a.jsx)(eL.$, {
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
    },
];
var df = n(817921);
function dh(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                var a;
                let s = (0, tT.Ay)(e),
                    u = (0, o.bG)([a7.default], () => a7.default.getCurrentUser()?.id),
                    c = t.at(-1),
                    d = null != c ? Math.max(c.created_at, c.finished_at ?? 0, c.settled_at ?? 0) : null,
                    m = (function (e, t) {
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
                    })(d, r),
                    f = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, aj.BL)(n)) return n;
                                if (!(0, aj.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h =
                        null == f ||
                        null != (a = f).awaitingUser ||
                        null != a.secretRequest ||
                        null != a.settingsRequest ||
                        (a.intake?.questions.length ?? 0) > 0
                            ? null
                            : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === cX(t, g.created_at, u) ? g.id : null,
                    x = c?.projectEvent?.type === "remixed" ? c.projectEvent : null,
                    v = x?.id ?? p;
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    idleMs: null != d ? Math.max(0, m - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = cW.get(`${e}:${n}`);
                        return null != l ? cX(t, l, u) : null;
                    },
                    isDismissed: (t) => c2(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, c4);
            i.useSyncExternalStore(c3, () => c0);
            let { callout: s, hint: u } = (function (e, t, n) {
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
                })(e, a, a.isDismissed),
                c = [s, u].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of c)
                        0 !== a.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                cW.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                c.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                          if (null == e.dismissal || c2(e, t, n)) return;
                                          let l = c1();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  cJ.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  G.w.set(cZ, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  G.w.set(cZ, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  G.w.set(cZ, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (c0++, cQ.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(dm, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(cV, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: df.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(c7, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var dg = n(52133),
    dp = n(732159),
    dx = n(888366),
    dv = n(862026),
    dj = n(291192);
function db(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, dv.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: dj.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: dj.Sp,
                children: [
                    (0, a.jsx)("span", { className: dj.q3 }),
                    (0, a.jsxs)("span", {
                        className: dj.g8,
                        children: [
                            (0, a.jsx)(dx.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: dj.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: dj.nM,
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
                                          (0, a.jsx)(aQ.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tq.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(dp.u, {
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
var dy = n(468689);
function dw(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            E.intl.format(n ? S.default.esEGL5 : S.default["XrN+Bg"], {
                onOpen: () => dy.A.open(t, q.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
function dk(e) {
    return (0, o.bG)([ek.Ay, tB.A], () => {
        let t = ek.Ay.getProject(e);
        return null == t ? "" : (tB.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var dN = n(951465),
    dC = n(369455);
function dA(e) {
    var t, n, l;
    let { projectId: r, notice: i } = e,
        s = dk(r),
        u = (0, o.bG)([ek.Ay, d.A], () => {
            let e = ek.Ay.getProject(r);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (d.A.getGuild(e.guild_id)?.name ?? null);
        }),
        c = (0, o.cf)([ek.Ay, rj.A, d.A, m.A], () => {
            let e = ek.Ay.getProject(r);
            if (null == e || "user" === e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(lQ.q7.AUTOMOD) === !0 ||
                    rj.A.getPublishStatus(r)?.surface === "automod",
                n = d.A.getGuild(e.guild_id),
                l = null != n && m.A.can(q.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            E.intl.format(
                ((t = i),
                (n = u),
                (l = c.automod),
                !0 === t.commands_failed
                    ? S.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? S.default.ev23Cw
                      : t.update
                        ? S.default.gQzuLC
                        : l
                          ? S.default.KORRGl
                          : null == n
                            ? S.default.MOrR29
                            : S.default["/npn7F"]),
                { name: s, server: u ?? "" },
            ),
            null != c.guildId
                ? (0, a.jsx)(dw, { guildId: c.guildId, update: i.update })
                : !c.automod && i.update && null != i.published_revision
                  ? (0, a.jsx)(dS, { projectId: r, notice: i })
                  : null,
        ],
    });
}
function dS(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tT.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [rj.A, ek.Ay],
                    () => {
                        let r = rj.A.getPublishStatus(e),
                            a = ek.Ay.getProject(e);
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
                                (0, ek.jf)(a),
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
                                        className: dC.Z,
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
                                        r = ek.Ay.getProject(e),
                                        a = null == r ? null : (0, tT.KL)(r, l);
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
                                null != e && (0, dN.A)(e);
                            },
                        }),
              ],
          });
}
var dE = n(940874),
    dI = n(505527),
    d_ = n(930390),
    dM = n(521981),
    dT = n(491182),
    dP = n(438729),
    dR = n(622868),
    dL = n(448368),
    d$ = n(837528),
    dD = n(470964),
    dO = n(715628),
    dq = n(752636),
    dz = n(9842),
    dF = n(589022),
    dU = n(967198);
let dG = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function dB(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function dK(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function dH(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = dK(e, t),
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
    if (dB(r) && dB(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && dB(dK(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function dV(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
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
                      for (; a > 0 && dH(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && dG.has(e.charAt(l - 1));) l--;
                                    return dG.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && dH(t, o);) o++;
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
var dW = n(624479),
    dX = n(890377),
    dY = n(180227);
function dZ(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(dY.QE, { [dY.Rn]: t }),
              children: (0, a.jsx)(oX.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          oX.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function dJ(e) {
    return tS.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: dW.CopyIcon, onClick: () => (0, tS.C)(e) }]
        : [];
}
function dQ(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: dX.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eY.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(dZ, { groupStart: n, actions: [...r, ...dJ(t)] });
}
function d0(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rU.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: tj.BugIcon, onClick: r }];
    return (0, a.jsx)(dZ, { groupStart: n, actions: [...i, ...dJ(t), ...s] });
}
let d1 = (0, oj.createChannelRecord)({ id: "conjure-builder", type: q.rbe.DM }),
    d2 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function d3(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(dY.Yq, { [dY.x1]: t }), children: e });
}
function d4(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let d5 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function d7(e, t, n) {
    let { content: l } = (0, dD.A)(e, d5),
        r = i.useMemo(() => ((0, so.aW)(e.content) ? (0, dM.z2)(u5.U, e, d5).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: d1, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(dP.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, dO.A)(s, r);
}
function d6(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, d$.m)(e, d1, t.usernameProfile, l),
        u = (0, d$.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([dU.A], () => dU.A.getGuildId()),
        d = (0, o.bG)([a7.default], () => a7.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = a7.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(dF.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function d8(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, so.aW)(n.content)
                          ? (0, dM.z2)(u5.U, n, e).content
                          : (0, dM.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: dY.GV,
                              children: [
                                  (0, a.jsx)(nX.x, {
                                      className: dY.Rj,
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
            [a5.A],
            () => ({
                isReplyAuthorBlocked: a5.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: a5.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, oV.X4)(n),
        m = (0, oV.X4)(t),
        f = d6(n);
    return (0, a.jsx)(dL.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: d1,
        referencedMessage: { state: dz.a.LOADED, message: n },
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
function d9(e) {
    let { message: t, author: n } = e,
        l = d6(t);
    return (0, a.jsx)(dR.Ay, {
        message: t,
        channel: d1,
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
function me(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, ch.vm)(l),
        c = i.useMemo(() => (0, oV.FT)(u, null), [u]),
        d = i.useMemo(() => n8(t), [t]),
        m = d?.body ?? t,
        f = (0, cd.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, ov.Ay)({ channelId: d1.id, content: m, author: u });
            return (0, ox.rh)({ ...e, timestamp: d4(n, e.timestamp), state: q.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              mt,
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
function mt(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = d7(t, l);
    return (0, a.jsx)(dT.A, {
        className: dY.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(d9, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: dY.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: dY.GV,
                              children: [
                                  (0, a.jsx)(nX.x, {
                                      className: dY.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: dY.WO, children: u }),
                      ],
                  }),
        childrenAccessories: d3(i, "" !== l),
        childrenButtons: (0, a.jsx)(dQ, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function mn(e) {
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
        { text: m, revealing: f } = dV(t, { streaming: (0, o.bG)([t8.A], () => c && t8.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, oV.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ch.vm)(p),
        v = i.useMemo(() => (null == r ? null : n8(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ov.Ay)({ channelId: d1.id, content: v?.body ?? r.content, author: x });
            return (0, ox.rh)({ ...e, id: r.id, timestamp: d4(r.createdAt, e.timestamp), state: q.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: d1.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, ov.Ay)({ channelId: d1.id, content: "", author: d2 })),
        w = i.useMemo(
            () =>
                (0, ox.rh)({
                    ...y,
                    timestamp: d4(n, y.timestamp),
                    state: q.cmJ.SENT,
                    ...(null != b ? { type: q.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", m), [w, m]),
        N = i.useMemo(
            () => (0, dq.A)({ message: w, channel: d1, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        C = d7(k, m, dY.OS);
    return (0, a.jsxs)("div", {
        className: dY.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(dT.A, {
                className: dY.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(d8, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: d3(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: dY.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var ml = n(981879);
function mr(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, ox.rh)(
                    { ...(0, ov.Ay)({ channelId: d1.id, content: "" }), id: `conjure:${t}`, state: q.cmJ.SENT },
                    {
                        reactions: [
                            {
                                emoji: { id: n.emojiId, name: n.emoji, animated: !0 === n.animated },
                                me: !1,
                                me_burst: !1,
                                count: 1,
                                burst_count: 0,
                            },
                        ],
                    },
                ),
            [t, n],
        );
    return (
        i.useEffect(() => {
            let e = { id: n.emojiId, name: n.emoji };
            function t() {
                (H.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: d1.id,
                    messageId: l.id,
                    users: [d2],
                    emoji: e,
                    reactionType: dI.v.NORMAL,
                }),
                    H.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: d1.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: dI.v.NORMAL,
                    }));
            }
            return (
                t(),
                H.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    H.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: ml.H,
            children: (0, a.jsx)(d_.A, {
                message: l,
                channel: d1,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var ma = n(616e3),
    mi = n(155899);
function ms(e) {
    let { onSelect: t, onClose: n = tu.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eJ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eQ.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eQ.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rU.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eQ.Dr, { id: "view-trace", label: "View Trace", icon: tj.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function mo(e) {
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
        j = null != v && null != p ? () => mu(v, p) : void 0,
        b =
            ((t =
                lV() && "assistant" === x.role && (0, aj.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [ma.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : ma.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lB = { projectId: e, traceId: t }), [...lG])) n(e);
                      })(l, b)
                : void 0,
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(cV, {
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
                          void (0, tu.jA)(t, (e) => (0, a.jsx)(ms, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(mn, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(d0, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(ce, {
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
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, aj.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: k,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != k && null != p && f
                        ? () =>
                              mu(
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
function mu(e, t) {
    (0, mi.F)({ onConfirm: () => t(e) });
}
var mc = n(288539);
function md(e, t, n) {
    return (0, a.jsx)(mc.A, { userId: e, content: `@${t}` }, n);
}
function mm(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, ch.Y_)(l);
            }, [l]);
            let r = (0, o.bG)([a7.default], () => (null == l ? null : a7.default.getUser(l)), [l]),
                a = (0, oy.tx)(r),
                s = dk(e),
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
        })(n, l, md),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([tP.A], () => null != t && t.length > 0 && i4({ keys: t }, tP.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(si, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let mf = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    aa.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, so.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(me, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(u4.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(cc, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(mr, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, dE.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(mn, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(u4.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(u9, {
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
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(mn, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(dA, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(mn, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(mm, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(db, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(u9, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(cV, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(u9, {
                            projectId: l,
                            steps: mh,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(mo, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, dg.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, dg.A)(e.row, t.row, ["message"]) &&
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
                (0, dg.A)(e.replyTo, t.replyTo) &&
                (0, dg.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    mh = [],
    mg = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    mp = new WeakMap();
function mx(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function mv(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let mj = i.memo(function (e) {
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
            scrollerRef: g,
            stickToBottomRef: p,
            pinned: x,
            onUnpin: j,
            handleRef: b,
            onShowsLatestChange: y,
        } = e,
        w = i.useRef(null),
        [k, N] = i.useState(null),
        C = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [A, I] = i.useState(null),
        _ = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(_.current), []);
    let M = i.useCallback((e) => {
            (I(e), window.clearTimeout(_.current), (_.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        T = (0, o.bG)([rj.A], () => rj.A.getPublishStatus(t)),
        R = (0, o.bG)([a7.default], () => a7.default.getCurrentUser()?.id),
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
                                        let t = (0, av.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = mp.get(r);
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
                        let a = !(0, aj.BL)(e),
                            i = sm({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, av.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, av.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && mg.test(n.prose.content)) m = !0;
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
                                        turnActive: ab(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = mg.test(e.content ?? "");
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
                    (mp.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return uN(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, T)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = uA.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), uA.set(t, n)), n);
                      })),
                m,
            );
        }, [n, T, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, O] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return mx(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : mv(e, t.endKey, t.end - 1) + 1,
                a = mv(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), mx(e, a, r));
        })($, D, x),
        z = i.useRef(q),
        F = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useCallback(() => {
            let e = g.current?.getScrollerNode(),
                t = w.current;
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
        }, [g]),
        V = i.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), mx(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), mx(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? mx(e, i, t.end) : null;
            })(F.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, P.loadOlderHistory)(t) : null != n && O(n);
        }, [g, p, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    O((e) => {
                        let t = z.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    V());
            },
            recordAnchor: H,
            showLatest(e) {
                ((B.current = e ?? null), O(null));
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
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), O(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, P.loadOlderHistory)(t) && (W.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    O(((n = F.current), mx(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, j, t],
        );
    (i.useEffect(() => {
        let e = W.current;
        null != e && X(e);
    }, [L, X]),
        i.useLayoutEffect(() => {
            if (null == k) return;
            let e = k.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), p.current ? g.current?.scrollToBottom() : H());
                });
            return (t.observe(k), () => t.disconnect());
        }, [k, H, g, p]));
    let Y = null == q.endKey;
    (i.useEffect(() => y?.(Y), [Y, y]),
        i.useLayoutEffect(() => {
            ((z.current = q), (F.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
                t = w.current;
            if (null != e && null != t) {
                let n = G.current;
                if (p.current) g.current?.scrollToBottom();
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
        }, [L, $, q.start, q.end, g, p, H, V]));
    let Z = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, aj.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        J = i.useMemo(
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
                : (0, aj.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([tP.A], () => tP.A.getSettings(t)?.secrets, [t]),
        er = (0, cG.WT)(t),
        ea = i.useMemo(() => (0, i2.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(cK.x7, cK.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: cK.Ub, children: (0, a.jsx)(nn.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: cK.x7,
            children: (0, a.jsx)(cV, { role: "assistant", children: (0, a.jsx)(mn, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(cH.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: cK.x7,
            children: [
                L.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            mf,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && A === n.id,
                                currentUserId: "user" === e.kind ? R : void 0,
                            },
                            e.key,
                        );
                    let l = n === et;
                    return (0, a.jsx)(
                        mf,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: X,
                            planVersion: J.get(n.render_id),
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
                Y
                    ? er.map((e) =>
                          (0, a.jsx)(
                              cV,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(mn, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(cB.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Y
                    ? (0, a.jsx)(cV, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(mn, {
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
                Y ? (0, a.jsx)(dh, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var mb = n(731084),
    my = n(823376),
    mw = n(187447);
function mk(e) {
    let { activity: t, id: n } = e,
        l = (0, ax.j)(),
        { text: r, revealing: s } = dV(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: mw.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(ag.Ch, {
                ref: o,
                className: mw.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(u8.PT, mw.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: oE.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var mN = n(53659);
function mC(e) {
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
        g = i.useRef(null),
        p = i.useId(),
        [x, j] = i.useState(null),
        b = (0, mb.xu)({
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
        w = b === mb.kx["0"],
        [k, N] = i.useState(m ?? y),
        A = (0, ax.j)();
    (l || (0, mb.E4)(y, k) || (!A && !w)) && k !== y && N(y);
    let I = i.useRef(y);
    (i.useEffect(() => {
        I.current = y;
    }, [y]),
        i.useEffect(() => {
            f?.(k);
        }, [k, f]));
    let _ = i.useRef(null),
        M = i.useRef(k);
    i.useEffect(() => {
        M.current = k;
    }, [k]);
    let T = i.useRef(w),
        P = i.useRef(0);
    (i.useEffect(() => {
        ((T.current = w), !w && (0, mb.E8)(M.current) && N(I.current));
    }, [w]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                T.current
                    ? ((P.current = (0, mb.E8)(M.current) ? P.current + 1 : 0), N((0, mb.Ov)(P.current)))
                    : I.current !== M.current
                      ? N(I.current)
                      : _.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, mb.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let R = null != t && "" !== t.text,
        L = t?.session ?? null,
        $ = R && null != L && x === L,
        D = i.useCallback(() => {
            R && null != L && j((e) => (e === L ? null : L));
        }, [R, L]),
        O = i.useCallback(() => j(null), []);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: O,
        renderPopout: () => (0, a.jsx)(mk, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: g,
                className: h()(mN.hF, R && mN.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : w
                            ? mb.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: mN.bl,
                        children: (0, a.jsx)(my.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: mN.xu,
                        "aria-hidden": !!u || !!w || void 0,
                        children: A
                            ? (0, a.jsx)(ct.o, {
                                  ref: _,
                                  text: k,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: mb.vg,
                                  delay: null,
                                  className: mN.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: mN.yE,
                                  children: k,
                              }),
                    }),
                ],
            }),
    });
}
let mA = { second: 1e3, minute: 6e4 };
function mS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = mA[t];
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
var mE = n(719374);
function mI(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = mS(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: mE.$,
        "data-conjure-turn-timer": !0,
        children: (0, sy.C7)(l),
    });
}
function m_(e) {
    let { startedAt: t } = e,
        n = mS(t, "minute");
    return (0, a.jsx)(aC.A, { role: "timer", children: (0, sy.Us)(n) });
}
var mM = n(885574),
    mT = n(242779),
    mP = n(436804);
function mR(e) {
    return e.toLocaleString();
}
function mL(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: mP.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: mP.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [mR((0, mT.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    mR(n.input_tokens),
                    " in \xb7 ",
                    mR(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${mR(n.cache_creation_input_tokens)} cache write \xb7 ${mR(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function m$(e) {
    let { project: t } = e,
        n = (0, mT.wU)(t.compaction),
        l = (0, mT.wU)(t.classifier),
        r = (0, mT.wU)(t.image),
        i = (0, mT.wV)(t.orchestrator, t.codegen),
        s = (0, mT.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: mP.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: mP.Q$,
                children: (0, a.jsxs)("div", {
                    className: mP.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [mR((0, mT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(mL, { label: E.intl.string(S.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(mL, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(mL, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(mL, { label: E.intl.string(S.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: mP.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, mT.sj)(s) ? "\u2014" : `${Math.round(100 * (0, mT.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function mD(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(m$, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: mP.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(mM.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var mO = n(997421);
function mq(e) {
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
        g = (0, l$.Zv)(t),
        p = (0, o.bG)([rj.A], () => rj.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, mb.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, mb.uc)(f),
        w = null != s,
        k = s ?? (n ? l : void 0),
        N = n || r || w || !0 === m;
    return (0, a.jsxs)("div", {
        className: mO.jf,
        children: [
            (0, a.jsxs)("div", {
                className: mO.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || g || p
                        ? (0, a.jsx)(mC, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: w,
                              recalling: u,
                              controlling: g,
                              publishPending: p && N,
                              publishing: p,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != k ? (0, a.jsx)(mI, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(m_, { startedAt: k }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: mO.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(mD, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, mb.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: mO.XF,
                      children: (0, mb.Db)(h),
                  }),
        ],
    });
}
let mz = ["wheel", "touchstart", "pointerdown", "keydown"];
var mF = n(608711);
let mU = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function mG(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        m,
        { projectId: f, restoreState: h, onRestoreVersion: g, onImportProject: p } = e,
        x = (0, o.bG)([X.A], () => X.A.getMessages(f), [f]),
        b = (0, o.bG)([P.default], () => P.default.getConnState(f), [f]),
        y = (0, o.bG)([X.A], () => X.A.getProjectUsage(f), [f]),
        w = (0, o.bG)([X.A], () => X.A.getThinkingActivity(f), [f]),
        k = (0, o.bG)([X.A], () => X.A.isCompacting(f), [f]),
        C = (0, o.bG)([X.A], () => X.A.isSaving(f), [f]),
        A = iY(f),
        I = (0, o.bG)([iH.A], () => iH.A.getModelSettings(f), [f]),
        _ = i.useRef(null),
        M = i.useRef(null),
        T = i.useRef(null),
        {
            stickToBottomRef: R,
            pinned: L,
            atBottom: $,
            unpin: D,
            releasePinHold: O,
            showsLatest: q,
            showsLatestRef: z,
            handleShowsLatestChange: F,
            updatePin: U,
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
                    for (let e of mz) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of mz) t.removeEventListener(e, u);
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
        })(M),
        B = i.useCallback(() => {
            function e() {
                let e = _.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (O(), z.current ? e() : T.current?.showLatest(e));
        }, [O, z]),
        K = i.useCallback(() => {
            (U(), T.current?.handleScroll());
        }, [U]);
    (i.useLayoutEffect(() => {
        let e = _.current;
        if (null == e) return;
        let t = M.current?.getScrollerNode(),
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
                r && (R.current ? M.current?.scrollToBottom() : T.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [R]),
        i.useEffect(() => {
            (0, P.ensureConnection)(f);
        }, [f]),
        (0, su.E1)(f, (0, ax.j)()));
    let H = lc(f),
        V = (function (e) {
            let t = (0, tT.Ay)(e),
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
        })(f),
        W =
            ((l = (0, o.bG)([iW.A], () => iW.A.getFailure(f))),
            (r = i.useCallback(() => (0, iX.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: r },
                  }),
        Y = (0, o.bG)([iW.A], () => iW.A.getSetupStartedAt(f), [f]),
        Z = i.useCallback(
            (e, t) => {
                (0, P.sendUserMessage)(f, e, t);
            },
            [f],
        ),
        J = i.useCallback(
            (e, t, n) => {
                let l = n ?? Z;
                0 === H.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => n2(e.comment)),
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
                                      a.push(`${t + 1}. ${n5(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: H.annotations, metaComment: e, context: H.context }),
                          t,
                      ),
                      li(f));
            },
            [H, Z, f],
        ),
        Q = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of ar)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, P.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = ar.get(e);
                            (ar.delete(e), ai(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                X.A.isThinking(f)) &&
                (0, P.interruptTurn)(f);
        }, [f]),
        ee = i.useCallback((e) => ey(f, e.implementation_prompt), [f]),
        [et, en] = (function (e) {
            let [t, n] = i.useState(() => sc(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? sc(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        el = i.useCallback(() => Z(E.intl.string(S.default["t5CN3+"])), [Z]),
        er = i.useCallback((e, t, n) => ey(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        ea = i.useCallback((e) => (0, iV.X)(f, e), [f]),
        es = i.useCallback((e) => (0, ei.vX)(f, e), [f]),
        eo = i.useCallback((e) => no(f, "chat", Array.from(e), es), [f, es]),
        eu = i.useCallback(() => ey(f, E.intl.string(S.default.Zc7gML)), [f]),
        ec = h?.status === "restoring",
        ed = "open" === b && !ec,
        em = x[x.length - 1],
        ef = null != em && "assistant" === em.role && null != em.proposal,
        [eh, eg] = i.useState(null),
        ep = em?.clarification != null && em.clarification.id !== eh ? em.clarification : null,
        ex = i.useCallback(() => {
            null != ep && eg(ep.id);
        }, [ep]),
        [ev, ej] = i.useState(null),
        eb = (function (e) {
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
        })(f),
        ew = em?.appBuildRequest != null && (0, aj.BL)(em) && em.appBuildRequest.id !== ev ? em.appBuildRequest : null,
        eC = eb.request ?? (null == ep ? ew : null),
        eS = null == eb.request ? ep : null,
        eM = null != eC && eC === eb.request,
        { close: eT, sent: eP } = eb,
        eR = eb.request?.id,
        e$ = i.useCallback(() => {
            eM ? eT() : null != eC && ej(eC.id);
        }, [eC, eM, eT]),
        eD = i.useCallback(
            (e) => {
                (null != eR && eP(eR),
                    (0, eX.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eR, eP],
        ),
        eO = (0, o.bG)([tP.A], () => tP.A.getSettings(f), [f]),
        [eq, ez] = i.useState(null),
        eF = i9(),
        eU =
            null != em &&
            ((t = em.id),
            (s = (0, i2.Mv)(x, eO?.secrets)),
            (u = se(x)),
            x.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, aj.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !st(e.settingsRequest, eO, eF.has(e.id)))),
            )),
        eG =
            null != em &&
            "assistant" === em.role &&
            null != em.settingsRequest &&
            null == em.secretRequest &&
            (0, aj.BL)(em) &&
            em.id !== eq &&
            ((n = em.settingsRequest),
            (c = n.keys ?? []),
            null != eO &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eO.schema.find((t) => t.key === e);
                    return null != t && i3.has(t.type);
                })) &&
            i4(em.settingsRequest, eO) &&
            !eU
                ? em
                : null,
        eK = null == eb.request ? eG : null,
        eH = eK?.settingsRequest ?? null,
        eV = i.useCallback(() => {
            null != eG && ez(eG.id);
        }, [eG]),
        eW = null != eH,
        [eZ, eJ] = i.useState(null),
        eQ = eS?.id ?? eC?.id ?? eK?.id ?? (A ? "scope-setup" : void 0),
        e0 = null != ep || null != eC || null != eG || A;
    i.useLayoutEffect(() => {
        let e = M.current?.getScrollerNode(),
            t = eZ?.firstElementChild;
        if (null == eZ || null == e || !(0, eB.vq)(t, HTMLElement) || null == eQ) return;
        function n() {
            R.current && M.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eZ.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eZ, eQ, M, R]);
    let e1 = (0, o.bG)([X.A], () => X.A.hasLoadedHistory(f), [f]),
        e2 = (function (e) {
            let t = iY(e),
                n = (0, o.bG)([ek.Ay], () => null != ek.Ay.getProject(e), [e]),
                l = (0, o.bG)([X.A], () => X.A.hasLoadedHistory(e), [e]),
                r = (0, o.bG)([X.A], () => X.A.getMessages(e), [e]),
                a = (0, o.bG)([P.default], () => P.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    !(function (e, t) {
                        let n = eE()[e],
                            l = ek.Ay.getProject(e);
                        if (null == n || null == l || !X.A.hasLoadedHistory(e)) return;
                        let r = X.A.getMessages(e),
                            a = (0, P.optimisticMessageId)(n.nonce);
                        if (!0 === n.sent) {
                            let i = r.some(
                                    (e) => "user" === e.role && !0 !== e.held && e.id !== a && e.content === n.message,
                                ),
                                s = X.A.getHistoryLoads(e) > (eA.get(e) ?? 0);
                            i
                                ? eI(e)
                                : !s ||
                                  null != l.install_scope_setup ||
                                  X.A.isHistoryUnavailable(e) ||
                                  X.A.isThinking(e) ||
                                  e_(e, n, t);
                            return;
                        }
                        if (null != l.install_scope_setup) {
                            r.some((e) => e.id === a) ||
                                (0, P.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
                            return;
                        }
                        "open" === P.default.getConnState(e) &&
                            (G.w.set(eN, { ...eE(), [e]: { ...n, sent: !0 } }),
                            eA.set(e, X.A.getHistoryLoads(e)),
                            (0, P.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || e_(e, n, t));
                    })(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(f),
        e3 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e1,
            historyUnavailable: (0, o.bG)([X.A], () => X.A.isHistoryUnavailable(f), [f]),
            connState: b,
        }),
        e4 = "loading" === e3 && 0 === x.length,
        e5 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return mU[e % mU.length];
        }, [f]),
        e7 = ef ? E.intl.string(S.default.Zc7gML) : "greeting" === e3 && 0 === x.length ? e5 : null,
        e6 = i.useMemo(() => {
            for (let e = x.length - 1; e >= 0; e--) {
                let t = x[e];
                if ("assistant" === t.role && !(0, aj.BL)(t)) return t;
            }
        }, [x]),
        e8 = null != e6,
        e9 =
            null != e6
                ? null != (m = e6.turn_id ?? e6.steps.find((e) => null != e.turn_id)?.turn_id) &&
                  ss.default.isProbablyAValidSnowflake(m)
                    ? ss.default.extractTimestamp(m)
                    : e6.created_at
                : void 0,
        te = ef && ed ? eu : void 0,
        tt = i.useCallback(() => ey(f, E.intl.string(S.default.EMgIuY)), [f]),
        [tn, tl] = i.useState(null),
        [tr, ta] = i.useState(e8);
    (tr !== e8 && (ta(e8), e8 || tl(null)),
        i.useEffect(() => {
            if (!e8) return;
            let e = M.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tl(null)
                        : tl(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e8, e6?.steps, q]));
    let ti = q ? tn : "bottom",
        ts = i.useMemo(() => (null != e6 ? (0, ay.b9)(e6.steps) : ""), [e6]),
        to = i.useMemo(() => (null != e6 ? ((0, av.lt)(e6.steps) ?? e6.todos) : void 0), [e6]),
        tu = e6?.provisionalTodo,
        tc = null != e6 && ab(e6),
        td = i.useMemo(() => {
            var e;
            return null != e6 ? ((e = e6.steps), sA((0, av.Jf)(e, !0).tasks)) : void 0;
        }, [e6]);
    return (0, a.jsxs)("section", {
        ref: _,
        "data-conjure-chat": !0,
        className: mF.TE,
        children: [
            ed
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nG.ir,
                      onDrop: eo,
                  })
                : null,
            (0, a.jsx)(az, {
                onJumpToActivity: B,
                line: ts,
                placement: e8 && "top" === ti ? "top" : null,
                todos: to,
                todosLive: tc,
                provisionalTodo: tu,
                agents: td,
            }),
            (0, a.jsxs)("div", {
                className: mF.JX,
                children: [
                    (0, a.jsx)(ag.Ch, {
                        ref: M,
                        onScroll: K,
                        scrollbarGutter: e4 ? "both-edges" : "stable",
                        className: [mF.N$, $ ? null : mF.hB, eW ? mF.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(so.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(mj, {
                                projectId: f,
                                messages: x,
                                emptyState: e3,
                                floatingSettingsMessageId: eG?.id,
                                liveClarificationId: eS?.id,
                                onPickIdea: ed ? ee : void 0,
                                onAskForIdeas: ed ? el : void 0,
                                draftHasText: et,
                                onApprovePlan: ed ? tt : void 0,
                                onRestoreVersion: ec || e8 ? void 0 : g,
                                scrollerRef: M,
                                stickToBottomRef: R,
                                pinned: L,
                                onUnpin: D,
                                handleRef: T,
                                onShowsLatestChange: F,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: mF.NJ,
                        children: (0, a.jsx)(mq, {
                            projectId: f,
                            thinking: e8,
                            turnStartedAt: e9,
                            restoring: ec,
                            remixStartedAt: Y,
                            recalling: e4,
                            thinkingActivity: w,
                            compacting: k,
                            saving: C,
                            projectUsage: y,
                            connState: b,
                        }),
                    }),
                    A
                        ? (0, a.jsx)("div", { ref: eJ, className: mF.B5, children: (0, a.jsx)(i0, { projectId: f }) })
                        : null,
                    null == eS
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: eW ? `${mF.B5} ${mF.J9}` : mF.B5,
                              children:
                                  null != eS.install_scope_switch
                                      ? (0, a.jsx)(
                                            i1,
                                            {
                                                projectId: f,
                                                clarification: eS,
                                                offer: eS.install_scope_switch,
                                                onKept: ex,
                                            },
                                            eS.id,
                                        )
                                      : (0, a.jsx)(
                                            iK,
                                            {
                                                projectId: f,
                                                clarification: eS,
                                                onSubmit: ed ? er : void 0,
                                                onDismiss: ex,
                                            },
                                            eS.id,
                                        ),
                          }),
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: mF.B5,
                              children: (0, a.jsx)(
                                  aY,
                                  { projectId: f, request: eC, canSend: ed, onDismiss: e$, onSent: eM ? eD : void 0 },
                                  eC.id,
                              ),
                          }),
                    null == eH
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eS && null == eC ? eJ : void 0,
                              className: mF.B5,
                              children: (0, a.jsx)(
                                  si,
                                  { askId: eK?.id, projectId: f, request: eH, onDismiss: eV },
                                  eK?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mF.Jx,
                children: [
                    (0, a.jsx)(az, {
                        onJumpToActivity: B,
                        line: ts,
                        placement: e8 && "bottom" === ti ? "bottom" : null,
                        todos: to,
                        todosLive: tc,
                        provisionalTodo: tu,
                        agents: td,
                    }),
                    0 === H.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mF.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: H.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(eL.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => li(f),
                                  }),
                              ],
                          }),
                    null == W
                        ? null
                        : (0, a.jsx)("div", {
                              className: mF.qB,
                              children: (0, a.jsx)(ap.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: W.message,
                                  action: W.retry,
                              }),
                          }),
                    null == V
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mF.Db,
                              children: [
                                  (0, a.jsx)(ap.w, { type: "warning", role: "status", message: V.message }),
                                  (0, a.jsx)("div", {
                                      className: mF.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tk.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eY.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: V.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(
                        cz,
                        {
                            projectId: f,
                            canSend: ed,
                            running: e8,
                            restoring: ec,
                            onSend: J,
                            hasPendingContext: H.annotations.length > 0,
                            onInterrupt: ed ? Q : void 0,
                            onUploadFile: es,
                            onImport: p,
                            onSendToOtherProjects: e0 ? void 0 : eb.open,
                            onApprove: te,
                            suggestion: e7,
                            questionOpen: e0,
                            modelSettings: I,
                            onModelSettingsChange: ea,
                            onDraftHasTextChange: en,
                            inputLocked: A,
                        },
                        e2,
                    ),
                ],
            }),
        ],
    });
}
var mB = n(761508),
    mK = n(933294),
    mH = n(207438),
    mV = n(683438);
function mW(e, t) {
    return String(e).padStart(t, "0");
}
function mX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${mW(l.getHours(), 2)}:${mW(l.getMinutes(), 2)}:${mW(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${mW(l.getMilliseconds(), 3)}` : r;
}
var mY = n(667931);
let mZ = {
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
    mJ = { running: "Running", ok: "Done", error: "Failed" };
function mQ(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function m0(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function m1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function m2(e) {
    return m0(e.count > 1 ? e.totalMs : e.end - e.start);
}
let m3 = ["Arguments", "Result", "Usage", "Details"];
function m4(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function m5(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function m7(e) {
    let t = (0, mY.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mY.lp)(e) ? "interrupted" : "still running";
}
function m6(e) {
    return [mX(new Date(e.started_at).toISOString()) ?? "", m1(e.spans.length), (0, mY.Sj)((0, mY.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function m8(e) {
    let t = (0, mY.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mY.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += m9(r, "in")),
                (l.output += m9(r, "out")),
                (l.cacheRead += m9(r, "cache_read")),
                (l.cacheWrite += m9(r, "cache_write")),
                (l.costUsd += m9(r, "cost_usd"))));
    }
    let r = mY.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function m9(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var fe = n(738188),
    ft = n(430993),
    fn = n(364840),
    fl = n(224640),
    fr = n(20742);
let fa = { collapsed: new Set(), revealed: new Set() };
var fi = n(872892);
let fs = {
    op: fi.Q,
    model: fi.i3,
    tool: fi.dH,
    setup: fi.kc,
    worktree: fi.Qx,
    sandbox: fi.QH,
    build: fi.F1,
    platform: fi.Op,
    other: fi.fv,
};
function fo(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      m1(t.calls, "model call"),
                      `${mQ(t.input)} in`,
                      `${mQ(t.output)} out`,
                      `${mQ(t.cacheRead)} cache read`,
                      `${mQ(t.cacheWrite)} cache write`,
                      m5(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: fi.M1,
        children: [
            (0, a.jsx)("div", {
                className: fi.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${fi.DJ} ${fs[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: fi.o1,
                children: mY.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${m0(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: fi.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${fi.nf} ${fs[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: mZ[e] }),
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
function fu(e) {
    return `conjure-perf-trace-${e}`;
}
function fc(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: fi.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${fi.p0} ${s + o > 85 ? fi.EU : fi.jh}`,
                children: i,
            }),
        ],
    });
}
function fd(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? nm._ : rs.a,
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
        id: fu(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${fi.$y} ${r ? fi.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: fi.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: fi.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: fi.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: fi.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${fi.nf} ${fs[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: fi.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: fi.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: fi.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(fe.WarningIcon, { size: "xs", color: "currentColor", className: fi.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(fc, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${fi.M0} ${fi.Nh}`
                    : t.running
                      ? `${fi.M0} ${fi.rF}`
                      : `${fi.M0} ${fs[t.category]}`,
                duration: m2(t),
            }),
        ],
    });
}
function fm(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: fu(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${fi.$y} ${l ? fi.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: fi.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: fi.ai,
                        children: (0, a.jsx)(nm._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: fi.U9 }),
                    (0, a.jsx)("span", { className: `${fi.nf} ${fi.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: fi.MQ,
                        children: m1(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(fc, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${fi.M0} ${fi.ab} ${fi.dL}`,
                duration: m0(t.totalMs),
            }),
        ],
    });
}
function ff(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: fi._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: fi.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${fi.nf} ${fs[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [m4("Start", `+${m0(e.start)}`), m4("Duration", m2(e))];
                      e.count > 1
                          ? t.push(
                                m4("Calls", String(e.count)),
                                m4("Longest call", m0(e.maxMs)),
                                m4("Spread over", m0(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(m4("Self time", m0(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(m4("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(m4("Notes", l.join(", "))),
                          null != e.span.error && t.push(m4("Error", e.span.error)));
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
                              s = "cost_usd" === t ? m5(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), m4(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...m3.flatMap((e) => {
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
                                            className: fi.xd,
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
                                                            className: fi.vl,
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
function fh(e) {
    let { trace: t } = e,
        n = i.useMemo(() => m8(t), [t]);
    return (0, a.jsx)(fo, { stats: n });
}
function fg(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mY.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? fa : (0, mY.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mY.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mY.x7)(t)), l((n) => (0, mY._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mY.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mY.IE)(t, e);
                        null != n && l((e) => (0, mY.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mY.IE)(t, e);
                        null != n && l((e) => (0, mY.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mY.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mY.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mY.hB)(t));
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
        f = (0, mY.dj)(t),
        h = i.useMemo(() => (0, mY.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(fu(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(ft.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: fi.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: m7(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: m6(t),
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
                                      children: `${m1(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(fh, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: fi.KE,
                        children: [
                            (0, a.jsx)(eL.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(eL.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(eL.$, {
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
                        "aria-activedescendant": null == o ? void 0 : fu(o),
                        className: fi.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: fi.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: fi.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: fi.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${fi.io} ${(e / f) * 100 > 85 ? fi.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : m0(e),
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
                                          fd,
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
                                    : (0, a.jsx)(fm, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(fn.j, { children: (0, a.jsx)(ff, { node: s }) }),
        ],
    });
}
function fp(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([ma.A], () => ma.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(fl.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(fr.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(ft.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(fg, { trace: i }),
        ],
    });
}
let fx = { running: fi.Vf, ok: fi.mo, error: fi.Sr };
function fv(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${fi.Om} ${fx[t]}`, role: "img", "aria-label": mJ[t] });
}
function fj(e, t) {
    (0, tq.openModal)((n) => (0, a.jsx)(fp, { ...n, projectId: e, traceId: t }));
}
function fb(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => fj(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: fi.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: fi.sU,
                children: [
                    (0, a.jsx)(fv, { status: (0, mY.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: fi._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: m7(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: m6(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function fy(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            e4(
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
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eJ.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eQ.rX, {
                    children: (0, a.jsx)(eQ.Dr, {
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
            return (0, a.jsx)(tk.K, {
                ...e,
                buttonRef: l,
                icon: tN.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function fw(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([ma.A], () => ma.A.getTimingTraces(t), [t]),
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
                    let t = e.map(m8);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mY.BF.map((e) => ({
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
              className: fi.Ie,
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
              className: fi.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: fi.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: fi.fH,
                              children: (0, a.jsx)(mV.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(fy, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(ag.Ch, {
                      className: fi.XG,
                      children: [
                          (0, a.jsx)(fo, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: fi.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(fb, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function fk(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function fN(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function fC(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function fA(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function fS(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function fE(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let fI = ["all", "preview", "stable", "web"];
function f_(e) {
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
function fM(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: fk(e.memory_p50_bytes ?? 0),
              p999: fk(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let fT = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var fP = n(911608),
    fR = n(177427);
function fL(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fR.KE,
        children: [
            (0, a.jsx)("div", {
                className: fR.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(nn.y, { type: nn.t.PULSING_ELLIPSIS })
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: fA(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(eL.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function f$(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: fR.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: fR.Gf, children: t }),
            n,
        ],
    });
}
function fD(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: fR.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fR.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: fR.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: fR.kS,
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
function fO(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: fR.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fR.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(fP.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? fR.dh : void 0,
            }),
        ],
    });
}
function fq(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(fD, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: f_(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(fD, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = fM(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fD, { label: E.intl.string(S.default["H/X+FI"]), value: fN(n.cpu_ms) }),
            null != l && (0, a.jsx)(fD, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function fz(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(f$, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: f_(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? fT[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(f$, {
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
                          fD,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: fN(t.cpu_ms) }),
                              hint: fM(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var fF = n(678708),
    fU = n(414499),
    fG = n(714800),
    fB = n(81466),
    fK = n(424383),
    fH = n(816943),
    fV = n(268791),
    fW = n(514042),
    fX = n(872351),
    fY = n(708988),
    fZ = n(150934),
    fJ = n(417270);
let fQ = "Restart Agent",
    f0 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function f1(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function f2(e, t) {
    return { label: e, value: null != t && "" !== t ? fA(t) : "Unknown", icon: "calendar" };
}
function f3(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function f4(e, t, n, l) {
    let [r, a] = f0[n.status];
    return { label: e, value: `${f3(n.bytes)} of ${f3(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function f5(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = fA(e.at);
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
let f7 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function f6(e) {
    let t = `container ${f1(e.local)} \xb7 remote ${f1(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: f7[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${fC(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${fC(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${fC(n)} Ahead, ${fC(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let f8 = ["main", "wip"];
var f9 = n(400154);
let he = {
        checkout: fF.FolderIcon,
        edit: aJ.PencilIcon,
        remote: fU.h,
        commits: fG.e,
        calendar: fB.CalendarIcon,
        save: fK.L,
        objects: tl.R,
        download: fH.$,
        size: fV.$,
        file: fW.FileIcon,
    },
    ht = {
        ok: [nI.y, k.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [fe.WarningIcon, k.A.colors.ICON_FEEDBACK_WARNING],
        error: [nl.a, k.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fX.z, k.A.colors.ICON_MUTED],
        behind: [fY.M, k.A.colors.ICON_MUTED],
    };
function hn(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([ma.A], () => ma.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, mH.DK)(t), [t]),
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
                    `Updated ${fA(r)}`,
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
    return (0, a.jsxs)(f$, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: f9.Lj,
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
                    if (!e.running || null != e.localError) return [f5(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            f5(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : fC(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = f8.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(f6))
                        : l.push(
                              { label: "Main", value: f1(e.heads.main), icon: "remote" },
                              { label: "WIP", value: f1(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? fC(e.commits) : "Unknown", icon: "commits" },
                            f2("Oldest Commit", e.oldest),
                            f2("Newest Commit", e.newest),
                            f5(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${fC(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${fC(t.loose)} loose (${fk(t.looseBytes)}) \xb7 ${fC(t.packed)} packed in ${n} (${fk(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${fC(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${fC(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                f4(
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
                                  f4("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = he[r],
                        [o, u] = null != i ? ht[i] : [null, void 0];
                    return (0, a.jsx)(
                        fD,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: k.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function hl(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([ma.A], () => ma.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, mH.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = ma.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, mH.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                H.h.dispatch({
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
            let u = i.useCallback(() => (0, mH.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fQ,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, tc.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: f9.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: f9.nM,
                children: [
                    (0, a.jsx)(fZ.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(eL.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fJ.RetryIcon,
                        text: fQ,
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
                            return `Restarted \xb7 new instance since ${fA(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${fA(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function hr(e, t) {
    return (0, a.jsx)(fD, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fC((0, mT.aM)(t)) }),
        hint: `${fC(t.input_tokens)} in \xb7 ${fC(t.output_tokens)} out \xb7 ${fC(t.cache_read_input_tokens)} cache read`,
    });
}
function ha(e) {
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
        { projectId: h, status: g, fetchState: p, onRefresh: x } = e,
        {
            lastTurn: j,
            lastCompaction: b,
            lastDecline: y,
            forceState: w,
            restartState: k,
            turnRunning: N,
            handleForceCompaction: C,
            handleForceCompactionOverride: A,
            handleRestartWorkspace: I,
            lifetime: _,
            limits: M,
            session: T,
            contextCeiling: P,
        } = ((t = (0, o.bG)([ma.A], () => ma.A.getLastTurnUsage(h), [h])),
        (n = (0, o.bG)([ma.A], () => ma.A.getLastCompaction(h), [h])),
        (l = (0, o.bG)([ma.A], () => ma.A.getLastCompactionDecline(h), [h])),
        (r = (0, o.bG)([ma.A], () => ma.A.getForceCompactionState(h), [h])),
        (s = (0, o.bG)([ma.A], () => ma.A.getSandboxRestartState(h), [h])),
        (u = (0, o.bG)([X.A], () => X.A.isThinking(h), [h])),
        (c = i.useCallback(() => (0, mH.Lj)(h), [h])),
        (d = i.useCallback(() => (0, mH.Lj)(h, !0), [h])),
        (m = i.useCallback(() => (0, mH.bq)(h), [h])),
        (f = g?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: c,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: m,
            lifetime: g?.agent?.lifetime ?? null,
            limits: f,
            session: g?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? f?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: f9.Mf,
        children: [
            (0, a.jsx)(fL, { generatedAt: g?.generated_at ?? null, fetchState: p, onRefresh: x }),
            (0, a.jsx)(f$, {
                title: E.intl.string(S.default.JghNal),
                children:
                    null == _
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fD, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: fC((0, mT.a7)(_.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: fC(_.turns) }),
                                  }),
                                  hr(E.intl.string(S.default.xtxP0e), _.orchestrator),
                                  hr(E.intl.string(S.default["9Sj3SX"]), _.codegen),
                                  hr(E.intl.string(S.default.ANCEo3), (0, mT.wU)(_.compaction)),
                                  g?.agent?.outcomes != null &&
                                      Object.keys(g.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(fD, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(g.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${fC(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(f$, {
                title: E.intl.string(S.default.dZHPE5),
                children:
                    null == j
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  hr(E.intl.string(S.default["7X3i9d"]), j.total),
                                  (0, a.jsx)(fD, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, mT.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(f$, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != b && null != P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fO, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: b.tokensAfter,
                                      max: P,
                                      formatValue: fC,
                                  }),
                                  (0, a.jsx)(fD, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${fC(b.tokensBefore)} \u{2192} ${fC(b.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: fC(b.retainedMessages),
                                          time: fA(b.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: fC(P) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != y &&
                        (0, a.jsx)(fD, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${fC(y.projected)} / ${fC(y.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: fA(y.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: f9.Lj,
                        children: [
                            (0, a.jsx)(eL.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.wox6Ev);
                                    if ("pending" === e) return E.intl.string(S.default.OcPHQ1);
                                    let t = fA(e.observedAt);
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
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(eL.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: E.intl.string(S.default.ZxG2AI),
                                            onClick: A,
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
                        className: f9.Lj,
                        children: [
                            (0, a.jsx)(eL.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === k,
                                disabled: "pending" === k || N,
                                onClick: I,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof k && "restarted" !== k.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.mlok8D);
                                    if ("pending" === e) return E.intl.string(S.default["1ugSyK"]);
                                    let t = fA(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(k),
                            }),
                        ],
                    }),
                    (0, a.jsx)(hl, { projectId: h }),
                ],
            }),
            (0, a.jsx)(hn, { projectId: h }),
            (null != T || g?.analytics != null) &&
                (0, a.jsxs)(f$, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != T &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(fD, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: fA(T.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(fD, { label: E.intl.string(S.default["8V8e1Z"]), value: fC(T.sockets) }),
                                    (0, a.jsx)(fD, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: T.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    T.queued_messages > 0 &&
                                        (0, a.jsx)(fD, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: fC(T.queued_messages),
                                        }),
                                ],
                            }),
                        g?.analytics != null && (0, a.jsx)(fq, { analytics: g.analytics }),
                    ],
                }),
            null != M &&
                (0, a.jsxs)(f$, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(fD, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: fC(M.max_subagent_iterations),
                        }),
                        (0, a.jsx)(fD, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fC(M.context_window_tokens) }),
                        }),
                        (0, a.jsx)(fD, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: fC(M.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(fD, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: fC(M.max_user_message_chars),
                        }),
                        (0, a.jsx)(fD, { label: E.intl.string(S.default.kIHga0), value: fC(M.max_build_attempts) }),
                        (0, a.jsx)(fD, { label: E.intl.string(S.default.Iw03yW), value: fC(M.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var hi = n(629584),
    hs = n(531893);
function ho(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: hs.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function hu(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: hs.qf,
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
              className: hs.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function hc(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: hs.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var hd = n(109079);
let hm = i.memo(function (e) {
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
        className: hd.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: hd.Mt,
                selectable: !0,
                children: mX(n.ts) ?? n.ts,
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
                className: hd.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: hd.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: hd.Cq, children: (0, a.jsx)(sU.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: hd.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(sU.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: hd.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(rs.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nm._, {
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
                                          className: hd.dF,
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
function hf(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([mK.A], () => mK.A.getLogs(t), [t]),
        l = (0, o.bG)([mK.A], () => mK.A.getHistoryState(t, "logs")),
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
        g = i.useMemo(
            () =>
                fI.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return fE(e);
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
        className: hd.$F,
        children: [
            (0, a.jsxs)("div", {
                className: hd.y4,
                children: [
                    (0, a.jsx)(hi.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: hd.KT,
                        children: (0, a.jsx)(mV.I, {
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
            n.length > 0 && (0, a.jsx)(ho, { state: l }),
            (0, a.jsxs)(ag.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: hd.sx,
                children: [
                    (0, a.jsx)(hc, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(hu, {
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
                          : d.map((e) => (0, a.jsx)(hm, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function hh(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(f$, {
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
function hg(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(fD, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: fE(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(fD, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: fC(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${fA(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(fD, { label: E.intl.string(S.default.Iz5GnJ), value: fC(l.guild_count) }),
                  (0, a.jsx)(fD, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: fC(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: fA(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(fD, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: fC(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(fD, { label: fE(n), value: E.intl.string(S.default.lTHQss) });
}
function hp(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(fD, {
        label: fE(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: fC(n.requests),
            failures: fC(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: fA(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: fA(n.since) }),
    });
}
function hx(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fD, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: fE(t) }),
                value: fC(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    fD,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: fA(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function hv(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(fD, {
        label: fE(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: fC(n.calls), errors: fC(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function hj(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(f$, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(f$, {
        title: t,
        children: [
            (0, a.jsx)(fD, {
                label: E.intl.string(S.default.xtD4Zp),
                value: fC(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: fA(n.since) }),
            }),
            (0, a.jsx)(fD, { label: E.intl.string(S.default.gfRhR3), value: fC(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fO, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: fN,
                          }),
                          (0, a.jsx)(fD, {
                              label: E.intl.string(S.default.mSKImM),
                              value: fN(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: fN(n.cpu_ms_total),
                                  wall: fN(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(fD, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(fD, { label: E.intl.string(S.default.xvmL1D), value: fN(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(fD, { label: E.intl.string(S.default["4sQYwH"]), value: fC(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(fD, {
                label: E.intl.string(S.default.bQenOy),
                value: fC(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(fD, { label: E.intl.string(S.default.xgpn4Y), value: fS(n.build) }),
        ],
    });
}
function hb(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(f$, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(fD, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(fD, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: fk(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: fC(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(fO, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: fk,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function hy(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: f9.Mf,
        children: [
            (0, a.jsx)(fL, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(hj, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(hj, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(hb, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(hh, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(hg, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(hh, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(hp, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(hh, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(hx, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(hh, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(hv, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(fz, { analytics: t.analytics }),
                        (0, a.jsxs)(f$, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(fD, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? fS(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(fD, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? fS(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var hw = n(592465);
function hk(e) {
    let { projectId: t, onClose: n } = e,
        l = lV(),
        [r, s] = i.useState(() => (l && lB?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([ma.A], () => ma.A.getStatus(t), [t]),
        c = (0, o.bG)([ma.A], () => ma.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, mH.R7)(t), (0, mH.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, P.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lB || lB.projectId !== e) return null;
            let { traceId: t } = lB;
            return ((lB = null), t);
        })(t);
        return null != e && (fj(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lK(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, tS.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: ma.A.getStatus(t),
                        last_turn_usage: ma.A.getLastTurnUsage(t),
                        last_compaction: ma.A.getLastCompaction(t),
                        last_compaction_decline: ma.A.getLastCompactionDecline(t),
                        timing_traces: ma.A.getTimingTraces(t),
                        logs: mK.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eX.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: hw.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(r_.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(r_.Ay.Icon, {
                            icon: dW.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(r_.Ay.Icon, { icon: eY.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(r_.Ay.ChannelIcon, { icon: tj.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(r_.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: hw.rf,
                children: [
                    (0, a.jsxs)(mB.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: hw.vR,
                        children: [
                            (0, a.jsx)(mB.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(mB.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(mB.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(mB.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(hf, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(hy, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(fw, { projectId: t })
                            : (0, a.jsx)(ha, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var hN = n(365912),
    hC = n(873715);
function hA(e) {
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
let hS = Object.freeze({ x: -1, y: -1 });
function hE(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = hA(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var hI = n(192888);
function h_(e, t) {
    return (0, hI.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(hE, () => ({ status: "failed" }));
}
var hM = n(108308);
let hT = { x: 25, y: 21 };
function hP(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function hR(e, t, n, l) {
    let r = hP(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function hL(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function h$(e) {
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
function hD(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = lc(u),
        m = (0, l$.Zv)(u),
        f = (0, tq.useHasAnyModalOpen)(),
        h = (0, o.bG)([a7.default], () => a7.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, w] = i.useState(!1),
        [k, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        [T, R] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, O] = i.useState(null),
        [q, z] = i.useState(null),
        F = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || O(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => ej(V, "design");
    }, [V]);
    let W = rO(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (b(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, hC.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? h$(t.response) : null;
                    null == n ? w(!0) : (x(n), ls(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), w(!0));
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
        if (null == p) {
            X.current = W;
            return;
        }
        if (rD(X.current, W)) return;
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
                    (0, hC.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Q.current) return;
                        let l = h$(e.response);
                        null != l && (x(l), ls(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = hA(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = ln(u)).active &&
                                0 !== r.size &&
                                ll(u, {
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
    }, [H, W, p, d, u, r]),
        i.useEffect(() => {
            if (!H)
                return () => {
                    (N(null), O(null), K(null), x(null));
                };
        }, [H]));
    let Y = i.useRef(null),
        Z = i.useRef(null),
        J = i.useRef(!1),
        Q = i.useRef(!1);
    i.useEffect(() => {
        ((Q.current = H), H || ((Y.current = null), (Z.current = null), (M.current = null), A(!1)));
    }, [H]);
    let ee = i.useCallback(
            function e() {
                if (J.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = r();
                null != n &&
                    ((J.current = !0),
                    h_(n, t).then((t) => {
                        if (((J.current = !1), Q.current)) {
                            if ("picked" !== t.status || hG(t.target, ea.current.rect, ea.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = n3(t.target);
                                (R((t) => (hU(t, e) ? t : e)),
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
        et = i.useCallback(() => {
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
            let e = setTimeout(() => z(null), hz);
            return () => clearTimeout(e);
        }, [q]));
    let en = null == p || null == W || p.viewport.width < 1 ? 1 : W.width / p.viewport.width,
        el = null != p || y,
        er = i.useMemo(() => p?.elements ?? [], [p]),
        ea = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ea.current = { rect: W, scale: en };
    }, [W, en]);
    let es = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (ej(u, "design"),
                    K(null),
                    (F.current = !1),
                    O({ projectId: u, target: e, anchor: t, draft: "", at: n, label: n3(e) }));
            },
            [u],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        eu = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eu);
    let ec = i.useCallback(
            (e) => {
                if (null == W || null != B) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), eu(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > hF || Math.abs(e.clientY - D.at.y) > hF) && (F.current = !0);
                    return;
                }
                if (!el) return void N(null);
                let t = eo(e, W);
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
                        })(er, t.x, t.y),
                        n = null != e && hG(e, W, en) ? null : e;
                    if (null != n) {
                        let e = n3(n);
                        R((t) => (hU(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Z.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Z.current = n), (Y.current = n), ee());
            },
            [W, en, el, eo, L, er, D, B, eu, ee],
        ),
        ed = null == B ? null : d.find((e) => e.id === B.id),
        em = H && (C || D?.target.marker != null || ed?.target.marker != null);
    i.useEffect(() => {
        if (em)
            return () => {
                let e = r();
                null != e && h_(e, hS);
            };
    }, [em, r]);
    let ef = i.useCallback(() => {
        (A(!1), N(null), (Z.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !el || L || null != D || null != B) return;
        let e = M.current,
            { rect: t, scale: n } = ea.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Z.current = l), (Y.current = l), ee());
    }, [H, C, el, L, D, B, ee]);
    let eh = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (et(), K(null));
                    return;
                }
                if (null == k || null == W) return;
                let t = eo(e, W);
                es(
                    k,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? n1
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(k, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [k, W, eo, D, B, es, et],
        ),
        eg = i.useCallback(() => {
            null != u && (N(null), null != lC(u) ? lS(u) : li(u));
        }, [u]),
        ep = i.useCallback(() => {
            null != u &&
                (null != D
                    ? et()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : eg());
        }, [u, D, B, et, eg]),
        ex = i.useRef(ep),
        ev = i.useRef(u),
        eb = i.useRef(eg);
    i.useLayoutEffect(() => {
        ((ex.current = ep), (ev.current = u), (eb.current = eg));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                rT.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rT.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eB.vq)(t) ||
                ey.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, hN.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ev.current || null == lC(ev.current)) && eb.current());
        }
    }, [H, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ep());
                    return;
                }
                if (null != D || null != B || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == k ? -1 : er.findIndex((e) => e.ref === k.ref);
                    N(er[(n + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != k &&
                    (e.preventDefault(),
                    es(k, n1, { x: (W?.left ?? 0) + k.rect.x * en, y: (W?.top ?? 0) + k.rect.y * en }));
            },
            [u, D, B, er, k, es, ep, W, en],
        ),
        ek = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((n2(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, P.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = n3(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${n7}${r}${n6}${n5(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        et(),
                        N(null)));
            },
            [u, D, et],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ei.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            if (null != u && null != B && null != g && n2(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = ln(u)).annotations.find((t) => t.id === e)) &&
                        lo(l, g) &&
                        ll(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, g]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != g) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = ln(u)).annotations.find((t) => t.id === e)) &&
                        lo(n, g) &&
                        ll(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, g]),
        eS = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eE = H && null != W,
        eI = C && null == B,
        e_ = D?.target ?? ed?.target ?? null,
        eM = D ?? q,
        eT = D ?? (q?.instant === !0 ? null : q),
        eP =
            null != ed && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = hL(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(hR(ed.target, ed.anchor, W, en), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ed?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ed;
            h_(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ed, r]),
        (0, rM.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: hM.Li,
                children: [
                    (0, a.jsx)(aC.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eS,
                    }),
                    eE
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: hM.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ec,
                                      onMouseLeave: ef,
                                      onClick: eh,
                                      onKeyDown: ew,
                                  }),
                                  null != k && null == k.marker && null == D && null == B
                                      ? (0, a.jsx)(hB, { box: hP(k, W, en) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: hM.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: hM.xz,
                                          "data-shown": null != k && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: hM.Ux,
                                              children: [
                                                  null == T
                                                      ? null
                                                      : (0, a.jsx)("span", { className: hM.Tl, children: T.kind }),
                                                  null == T || "" === T.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: hM.kh,
                                                            children: [" ", T.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: hM.Y,
                                      children: eI ? (0, a.jsx)("div", { className: hM.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: hM.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: hM.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: hM.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: hM.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: hM.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: hM.D0, style: hP(e_, W, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = hR(e.target, e.anchor, W, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: hM.xL,
                                              style: { ...hL(n, W), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n4(e.target),
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
                                                  (e.stopPropagation(), et(), K(l));
                                              },
                                              children: (0, a.jsx)(hO, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eM || null == u
                                      ? null
                                      : (0, a.jsx)(rL, {
                                            projectId: u,
                                            at: { x: eM.at.x + 20, y: eM.at.y + 20 },
                                            bounds: W,
                                            kind: eM.label.kind,
                                            value: eM.draft,
                                            canSubmit: null != D && n2(eM.draft),
                                            onChange: (e) => {
                                                null != D && O({ ...D, draft: e });
                                            },
                                            onSubmit: ek,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != ed && null != B && null != eP
                                      ? (0, a.jsxs)(hq, {
                                            point: eP,
                                            frame: W,
                                            authorId: ed.authorId,
                                            title: n4(ed.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(aV.f, {
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
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: hM.aC,
                                                          children: ed.comment,
                                                      }),
                                                lo(ed, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: hM.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: hM.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(eL.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(eL.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eA,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(eL.$, {
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
                                                                            ? (0, a.jsx)(eL.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !n2(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(eL.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: ed.comment,
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
function hO(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([a7.default], () => a7.default.getUser(t), [t]);
    return (0, a.jsx)(oA.eu, {
        src: null == n ? null : eD.Ay.getUserAvatarURL(n),
        size: oS._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function hq(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(hT);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: N,
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        A = { left: w, top: k, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: hM.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: hM.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: hM.ip, children: (0, a.jsx)(hO, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: hM.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: hM.zI, children: p }),
        ],
    });
}
let hz = 300,
    hF = 2;
function hU(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function hG(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function hB(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: hM.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var hK = n(659723),
    hH = n(697744),
    hV = n(130324);
function hW(e) {
    let t = (0, hH.c)(),
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
    let r = (0, ax.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function hX(e) {
    let { className: t } = e,
        { Component: n, events: l } = hW(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, hV.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: hV.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var hY = n(251363),
    hZ = n(944142),
    hJ = n(532247),
    hQ = n(501628);
function h0(e) {
    let { progress: t } = e,
        { Component: n } = hW(1500),
        l = lH.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: hQ.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: hQ.PM,
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
function h1(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([hZ.A], () => (s ? hZ.A.getLiveReload(t) : null), [s, t]),
        c = (0, rp.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hJ.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hJ.QP)(e, s)));
            let m = (0, o.bG)(
                    [lP.A],
                    () => {
                        let e = lP.A.getFrame(n);
                        return (0, ra.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, hY.ow)(null, n) && e();
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
        h = m ? null : (0, hJ.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(aC.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: hQ.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(h0, { progress: h }),
                  })
                : null,
        ],
    });
}
var h2 = n(357858),
    h3 = n(343030),
    h4 = n(317608),
    h5 = n(35367),
    h7 = n(771293);
let h6 = { width: 1 / 0, height: 1 / 0 };
function h8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h6;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var h9 = n(702083);
function ge(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([rx.A], () => ({
            mobile: rx.A.isBuilderPreviewMobile(),
            landscape: rx.A.isBuilderPreviewLandscape(),
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
        d = n ? h8(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(h9.dw, { [h9.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(h9.R9, { [h9.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var gt = n(347927);
function gn(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(gt.Bf, l && gt.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: gt.Ux,
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
var gl = n(957272);
function gr(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, h5.A)({ applicationId: t, surface: n, launch: l });
    if (((0, h7.A)(t, n), s === h5.n.Launched)) {
        let e = (0, a.jsx)(h4.A, { frameId: i.id, level: h3.A.WithinAppContent, className: gl.Z7, overlay: r });
        return (0, rv.Q5)(n) ? (0, a.jsx)(ge, { children: e }) : e;
    }
    return (0, a.jsx)(ga, { state: s });
}
function ga(e) {
    let { state: t } = e;
    switch (t) {
        case h5.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: gl.qs,
                children: (0, a.jsx)(gn, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case h5.n.NoApplication:
            return (0, a.jsx)(hX, { className: gl.qs });
        case h5.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: gl.qs,
                children: (0, a.jsx)(gn, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case h5.n.Error:
            return (0, a.jsxs)("div", {
                className: gl.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: gl.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case h5.n.AwaitingLaunch:
        case h5.n.Loading:
            return (0, a.jsx)("div", { className: gl.qs, children: (0, a.jsx)(nn.y, {}) });
    }
}
var gi = n(308528),
    gs = n(334738),
    go = n(688606),
    gu = n(365971),
    gc = n(703462);
function gd(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: gc.f,
        children: [
            (0, a.jsx)(eq.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function gm() {
    return (0, a.jsx)("div", { className: gc.f, children: (0, a.jsx)(nn.y, {}) });
}
function gf(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([a4.A], () => (null != c ? a4.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && gi.A.preload(q.ME, t);
        }, [t]),
        (n = (0, o.bG)([t8.A], () => t8.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, gu.Xg)();
            return (
                (0, gs.yl)(t, e),
                () => {
                    (0, gs.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lJ.CN)(l).then(
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
        ? (0, a.jsx)(gd, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(gm, {})
          : (0, a.jsx)("div", {
                className: gc.g,
                children: (0, a.jsx)(go.A, { channel: d, guild: null, chatInputType: cw.oU.SIDEBAR }, d.id),
            });
}
var gh = n(887909),
    gg = n(570962),
    gp = n(998475);
function gx(e) {
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
    } = (0, gh.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: gp.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: gp.rf,
                children: (0, a.jsx)(gg.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: gp.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: gp.z3,
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
                                className: h()(gp.Qs, c ? gp.cw : null, d ? gp.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: gp.o1,
                      children: s.map((e, t) => (0, a.jsx)(eL.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var gv = n(765671),
    gj = n(582063);
let gb = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function gy() {
    (0, eX.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function gw(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eZ.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(gk, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: gj.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tk.K, {
                                "aria-label": r,
                                icon: tw.SettingsIcon,
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
                accept: gb.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (gb.includes(n.type)
                                ? n.size > ea.aI
                                    ? (0, eX.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, sB.M$)(t, n).catch(gy)
                                : (0, eX.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function gk(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([sG.A], () => sG.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eJ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eQ.rX, {
                children: [
                    (0, a.jsx)(eQ.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: iM.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eQ.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: fJ.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, sB.Og)(t).catch(gy));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eQ.rX, {
                children: (0, a.jsx)(eQ.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, sB.Y1)(t, !i) || gy();
                    },
                }),
            }),
        ],
    });
}
function gN(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: i, width: s, height: o } = (0, gv.Ay)(),
        u = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: s, height: o }, l);
    return (0, a.jsxs)("div", {
        className: gj.JH,
        children: [
            (0, a.jsx)(sH, { projectId: n }),
            (0, a.jsx)("div", {
                ref: i,
                className: gj.dw,
                children: (0, a.jsx)("div", {
                    className: gj.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(u),
                    },
                    children: (0, a.jsx)(gr, { applicationId: t, surface: ra.ZN, frameOverlay: r }),
                }),
            }),
            null != n ? (0, a.jsx)(gw, { projectId: n }) : null,
        ],
    });
}
var gC = n(409478),
    gA = n(652227);
function gS(e) {
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
            overlayWidgetSize: m = l0,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, o.bG)([iW.A], () => null != f && null != iW.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: gA.qs, children: (0, a.jsx)(nn.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: gA.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(nn.y, {}) : (0, a.jsx)(gx, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: gA.RG,
                      children: [
                          (0, l4.yf)(u, c)
                              ? g
                                  ? (0, a.jsx)(gE, { projectId: f, onResume: p })
                                  : (0, a.jsx)(gr, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: gA.qs,
                                        children: (0, a.jsx)(gn, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(gC.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(gN, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(ra.ZN) })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(gf, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: gA.qs, children: (0, a.jsx)(nn.y, {}) })
              : (0, a.jsx)(hX, { className: gA.qs });
}
function gE(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, h2.Pu)(t),
        (0, a.jsx)("div", {
            className: gA.qs,
            children: (0, a.jsx)(gn, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(eL.$, {
                              size: "sm",
                              variant: "primary",
                              icon: tf.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var gI = n(750506),
    g_ = n(867193),
    gM = n(539197),
    gT = n(977020);
function gP(e) {
    let { projectId: t } = e,
        n = (0, gM.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, gM.Ie)(e);
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
        className: gT.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [gM.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(gT.hN, gT.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(gT.hN, gT.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(gT.UE, { [gT.SP]: n.shown, [gT.Vq]: n.pressed, [gT.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var gR = n(417760);
function gL(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([X.A], () => null != e && X.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, P.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, l$.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(eL.$, {
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
              className: h()(gR.M0, gR.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(my.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(uS.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: gR.ID, children: d }),
                  c ? (0, a.jsx)(aC.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: gR.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: gR.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: gR.sp,
                      children: [
                          (0, a.jsx)(uS.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(my.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: gR.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: gR.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: gR.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: gR.lC, children: m }) : null,
              ],
          });
}
function g$(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, l$.Zv)(null != n && n === l ? t : null),
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
        c = (0, tq.useHasAnyModalOpen)(),
        d = (0, rn.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, rn.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = r$(r());
            f((t) => (rD(t, e) ? t : e));
            let t = null == h ? null : r$(h);
            (x((e) => (rD(e, t) ? e : t)), null != h && (0, g_.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, g_.C)(0));
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
            let [e] = i.useContext(gI.uY),
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
                      className: gR.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: gR.QF,
                          children: (0, a.jsx)(gL, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rM.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(aC.A, {
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
                ? (0, rM.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: gR.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: gR.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(gP, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var gD = n(399503),
    gO = n(853555),
    gq = n(271982),
    gz = n(187645);
let gF = new Map(),
    gU = !1;
function gG() {
    let e = new Map();
    for (let t of new Set([...X.A.getActivityOrderedProjectIds(), ...(0, l$.T7)()])) {
        if (!lD(t) || lL.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ek.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, rv.Rc)(t), (0, rv.Th)(t)].find(ra.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [t, n] of [...gF])
        e.get(t) !== n.frameId &&
            (function (e, t) {
                (gF.delete(e), t.unregisterLookup(), gq.A.removeFrameTarget(t.frameId, t.element), t.element.remove());
                let n = lP.A.getFrame(t.frameId)?.applicationId;
                null != n && setTimeout(() => lF(e, n), 0);
            })(t, n);
    for (let [t, n] of e)
        gF.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = gz.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    gB(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (gF.set(e, l),
                    (l.unregisterLookup = (0, gO.Ng)(e, () => (0, hY.n5)(n, t))),
                    gq.A.registerFrameTarget(t, n, h3.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of gF) gB(t.element, e, t.frameId);
}
function gB(e, t, n) {
    if (lP.A.getFrame(n)?.surface.type === l5.U.OVERLAY) {
        let n = l2(ek.Ay.getProject(t));
        (e.classList.remove(gz.L), (e.style.width = `${n.width}px`), (e.style.height = `${n.height}px`));
        return;
    }
    let l = rx.A.isBuilderPreviewMobile();
    e.classList.toggle(gz.L, !l);
    let r = l ? h8(rx.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""), (e.style.height = null != r ? `${r.height}px` : ""));
}
var gK = n(873727),
    gH = n(147248),
    gV = n(418842),
    gW = n(363195),
    gX = n(818023);
let gY = null;
var gZ = n(517461),
    gJ = n(761929),
    gQ = n(487336);
function g0(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, gZ.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, Y.clamp)(u, 360, n),
        m = (0, gJ.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: gJ.R.HORIZONTAL_LEFT,
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
        className: gQ.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: gQ.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: gQ.kL, style: { width: d }, children: l }),
        ],
    });
}
var g1 = n(541940);
function g2(e) {
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
            paused: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, rp.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([gW.A], () => (0, gK.x4)(gW.A.theme)),
            l = (0, o.bG)([gH.A], () => gH.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([e$.Ay], () => ({
                reducedMotion: e$.Ay.useReducedMotion,
                fontScale: (0, gK.U0)(),
                highContrast: e$.Ay.isHighContrastModeEnabled,
                forcedColors: e$.Ay.useForcedColors,
                underlineLinks: e$.Ay.alwaysShowLinkDecorations,
            })),
            d = lH.hH.useSetting(),
            m = (0, gV.C)(),
            f = (0, o.bG)(
                [lP.A, rx.A],
                () =>
                    rx.A.isBuilderPreviewMobile() &&
                    lP.A.getFrame(t)?.applicationId === rx.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, hY.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, gK.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, hI.W)(l, "set-env", i, {
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
                    ((h.current = !1), g.current || j.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (g.current = !1),
                () => {
                    g.current = !0;
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
                let n = (0, hY.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, hY.n5)(e, t) && ((x.current = null), b());
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
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, gO.Ng)(t, () => (0, hY.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, hY.ow)(p, j), [p, j]),
        y = i.useCallback(() => (f ? (0, hY.ow)(p, j) : p), [f, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(g1.Mh, c),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(g$, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: g1.fm, children: d }),
                ],
            }),
            m,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(hD, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(am, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function g3(e) {
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
        onRestoreVersion: g,
        onImportProject: p,
        debugOpen: x = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: w,
        activeMode: k,
        widgetApplicationId: N,
        overlayWidgetSize: C,
        previewPaused: A = !1,
        onResumePreview: I,
    } = e;
    (0, gD.k)(t, N);
    let _ = s.type === l5.U.MAIN || (0, rv.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([rx.A], () => ({
            mobile: rx.A.isBuilderPreviewMobile(),
            landscape: rx.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? gX.aX.LANDSCAPE : gX.aX.PORTRAIT), (gY = e));
                else {
                    if (gY !== e) return;
                    ((l = gX.aX.UNHANDLED), (gY = null));
                }
                H.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(_ ? l : null);
    let M = i.useRef(null),
        [T, R] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, ah.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, ah.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (_) return ((0, lJ.HV)(l), () => (0, lJ.HV)(null));
        }, [l, _]),
        i.useEffect(() => {
            null != t &&
                ((0, P.ensureConnection)(t),
                gU ||
                    ((gU = !0),
                    X.A.addChangeListener(gG),
                    ek.Ay.addChangeListener(gG),
                    lP.A.addChangeListener(gG),
                    rx.A.addChangeListener(gG),
                    lL.A.addChangeListener(gG),
                    (0, l$.W3)(gG),
                    gG()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = M.current;
            if (null == e) return;
            function t() {
                null != e && R(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(360, T - 320),
        $ = d || _;
    return (0, a.jsx)("div", {
        ref: M,
        className: g1.LB,
        children: (0, a.jsx)(g2, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, l4.yf)(w, k),
            paused: A,
            mainClassName: null == c ? void 0 : h()(g1.ez, { [g1.zt]: d }),
            content: (0, a.jsx)(gS, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: w,
                activeMode: k,
                widgetApplicationId: N,
                overlayWidgetSize: C,
                projectId: t,
                paused: A,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(h1, { projectId: t, applicationId: l, previewApplicationId: r, surface: e }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(g0, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: g1.cO,
                              children: x
                                  ? (0, a.jsx)(hk, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(hK.Ay, { projectId: t }),
                                            (0, a.jsx)(r_.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(r_.Ay.Icon, {
                                                                  icon: eY.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(r_.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: g1.cb,
                                                children: (0, a.jsx)(
                                                    mG,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
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
var g4 = n(323140);
function g5(e) {
    var t;
    let l,
        r,
        { project: s, projectsLoaded: c, onBack: d, guildId: m } = e,
        [f, g] = i.useState(!0),
        [p, j] = i.useState(!1),
        b = lV(),
        w = lW.useConfig({ location: "ConjureSelectedProjectScreen" }).enabled,
        k = i.useCallback(() => g(!0), []),
        N = i.useCallback(() => {
            (j(!1), g(!0));
        }, []),
        { restoreState: C, handleRestoreVersion: A } = (function (e, t) {
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
                                (0, lY.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eX.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lX.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lZ.c)(u, r);
                                                null != e && (0, eX.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, eX.P0)({
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
        })(s, N),
        I = s?.id ?? null;
    ((t = s?.preview_application_id ?? null),
        i.useEffect(() => {
            if (null != I && null != t)
                return (
                    lz.add(t),
                    () => {
                        (lz.delete(t), lF(I, t));
                    }
                );
        }, [I, t]));
    let {
            integrationStatus: M,
            isPreviewApplicationLoading: T,
            checkingIntegration: L,
            previewReady: $,
            hasFrame: D,
            needsPermissionReview: O,
            installAuthorizeProps: F,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [ek.Ay, rm.A],
                    () => (null == r ? null : (ek.Ay.getIntegrationStatus(r) ?? rm.A.getIntegrationStatus(r))),
                    [r],
                ),
                c = e?.preview_application_id ?? null,
                { data: d, isLoading: m } = (0, rd.YY)(c ?? void 0),
                f = null != r && n !== r,
                h = u?.preview_ready === !0,
                g = u?.has_activity === !0,
                p = u?.bot_permissions_changed === !0,
                x = (0, l4.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: h,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: p,
                }),
                [v, j] = i.useState(null);
            i.useEffect(() => {
                if ((j(null), !x || f || null == c)) return;
                let e = !1;
                return (
                    (async function (t) {
                        try {
                            await (0, rd.TA)(t);
                        } catch {}
                        e || j(t);
                    })(c),
                    () => {
                        e = !0;
                    }
                );
            }, [p, f, x, c]);
            let b = i.useCallback(async () => {
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
                    b(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [b],
            );
            let y = (0, rf.a)(e ?? null, u ?? null, t),
                w = i.useCallback(async () => {
                    null != e && (await (0, rf.$)(e, y));
                }, [y, e]),
                k = i.useCallback(async () => {
                    try {
                        await w();
                    } catch {}
                    await b();
                }, [b, w]),
                N = i.useMemo(
                    () =>
                        null == c || m || f || v !== c
                            ? null
                            : {
                                  ...(0, rh.i)({ applicationId: c, application: d ?? null, guildId: y }),
                                  onClose: () => {
                                      k();
                                  },
                              },
                    [f, v, k, y, m, d, c],
                );
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: m,
                checkingIntegration: f,
                previewReady: h,
                hasFrame: g,
                needsPermissionReview: x,
                installAuthorizeProps: N,
            };
        })(s, m),
        U =
            (0, o.bG)([rj.A], () => (null == I ? void 0 : rj.A.getPublishStatus(I)?.previewAppChannels), [I]) ??
            M?.preview_app_channels,
        {
            availability: G,
            activeMode: B,
            setMode: K,
            frameSurface: H,
            frameSurfaceOptions: V,
            setFrameSurface: W,
            appChannel: X,
            setAppChannel: Y,
            frameLaunchParams: Z,
            widgetApplicationId: J,
        } = (0, l9.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: D,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: M?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(lQ.q7.OVERLAY) === !0,
            previewAppChannels: U,
        }),
        Q = l2(s);
    ((0, l3.x)(I, (e) => {
        G.modes.includes(e) && K(e);
    }),
        lK(I, () => {
            (g(!0), j(!0));
        }));
    let ee = G.modes.includes("frame"),
        et = (0, o.bG)([lL.A], () => lL.A.isPaused(I), [I]),
        en = ee && !et,
        {
            previewTargetOptions: el,
            handleSelectPreviewTarget: er,
            mobilePreview: ea,
            mobilePreviewLabel: ei,
            handleToggleMobilePreview: es,
            landscapePreview: eo,
            rotatePreviewLabel: eu,
            handleRotatePreview: ec,
            previewSurface: ed,
            previewFrame: em,
            refreshFrame: ef,
            isRefreshing: eh,
            handleRefresh: eg,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: a,
                    previewAppChannels: s,
                    setMode: u,
                    setFrameSurface: c,
                    setAppChannel: d,
                } = e,
                m = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === l5.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, a, s),
                    [n, a, s],
                ),
                f = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (c(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, c, u],
                ),
                h = (0, o.bG)([rx.A], () => rx.A.isBuilderPreviewMobile()),
                g = E.intl.string(h ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, lJ.GG)(!h), [h]),
                x = (0, o.bG)([rx.A], () => rx.A.isBuilderPreviewLandscape()),
                v = E.intl.string(x ? S.default.tunI2l : S.default.DoNdjA),
                j = i.useCallback(() => (0, lJ.Lw)(!x), [x]),
                b = (0, rv.jS)(t),
                y = i.useMemo(() => (0, rv.Op)(b, r), [b, r]),
                w = (0, rp.A)(t?.preview_application_id ?? null, y),
                k = (0, rp.A)(t?.preview_application_id ?? null, ra.ZN),
                N = "overlay" === l ? k : w,
                C = (0, ra.x1)(N) && N.data.proxyTicketRefreshing,
                A = i.useCallback(() => {
                    null == N || C || rg.A.refreshProxyTicket(N.id);
                }, [N, C]);
            return {
                previewTargetOptions: m,
                handleSelectPreviewTarget: f,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: j,
                previewSurface: y,
                previewFrame: w,
                refreshFrame: N,
                isRefreshing: C,
                handleRefresh: A,
            };
        })({
            project: s,
            modes: G.modes,
            activeMode: B,
            frameSurface: H,
            frameSurfaceOptions: V,
            previewAppChannels: U,
            setMode: K,
            setFrameSurface: W,
            setAppChannel: Y,
        }),
        ep = f && !p,
        ex = E.intl.string(ep ? S.default.JD6Oit : S.default.xjJAQm),
        ev = i.useCallback(() => {
            if (p) {
                (j(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [p]),
        ej = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: eb,
            designFeedbackToggleRef: ey,
            agentDrivingPreview: ew,
            designFeedbackLabel: eN,
            handleToggleDesignFeedback: eC,
        } = (function (e, t, n) {
            let { active: l } = lc(e);
            i.useEffect(() => {
                null != e && l && !t && li(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, l$.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void li(e);
                        (n(), lr(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(I, en, N),
        [eA] = i.useState(() => e2.isPlatformEmbedded && (0, rc.qM)()),
        eS = null != l_(I);
    i.useEffect(() => {
        null != I && eS && !en && lS(I);
    }, [I, eS, en]);
    let eE = i.useCallback(() => {
            null != I &&
                (N(),
                (function (e) {
                    if (null != lC(e)) return;
                    let { byProject: t } = lk.getState();
                    lk.setState({ byProject: { ...t, [e]: lN } });
                })(I));
        }, [I, N]),
        eI = i.useCallback(() => {
            null != I && lS(I);
        }, [I]),
        e_ = eS ? E.intl.string(S.default.tuQ5f3) : eN,
        eM = i.useCallback(() => {
            j((e) => !e && (g(!0), !0));
        }, []),
        eT = i.useCallback(() => j(!1), []),
        eP = i.useCallback(() => {
            null != I && (0, lJ._j)(I);
        }, [I]),
        eR = i.useCallback(() => {
            null != I && (et ? (0, lJ._j)(I) : (0, lJ.di)(I, em?.id));
        }, [I, et, em?.id]),
        e$ = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = em?.id), (0, P.closeConnection)(e), (0, lR.r)(t)), d());
        }, [s, em?.id, d]),
        eD =
            ((l = i.useCallback(() => {
                null != s && (k(), (0, P.sendUserMessage)(s.id, E.intl.string(S.default.oU20rd)));
            }, [s, k])),
            {
                onExport: l,
                onImport: (r = tt(
                    i.useCallback(
                        (e) => {
                            if (null == s) return;
                            let t = s.id,
                                n = e9(e);
                            null != n
                                ? (0, eX.P0)({ text: n, variant: "critical" })
                                : (0, tc.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: s.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          k();
                                          try {
                                              await e8(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eX.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [s, k],
                    ),
                )).open,
                importInput: r.input,
            }),
        eO = i.useCallback(() => {
            null != s && (0, tZ.A)(s, m);
        }, [s, m]),
        eq = (0, l4.JR)(B, O, M?.bot_permissions_changed === !0)
            ? { type: "permissions", authorizeProps: F }
            : L && null == M
              ? { type: "checking" }
              : void 0,
        ez = (0, o.bG)([ek.Ay], () => null != I && ek.Ay.isProjectDeleting(I), [I]);
    i.useEffect(() => {
        ((null == s && c) || ez) && (0, u.bG)(q.BVt.CHANNEL(m, z.VV.CONJURE));
    }, [m, s, c, ez]);
    let {
            publishOptions: eF,
            publish: eU,
            publishing: eG,
            confirmation: eB,
            variant: eK,
            text: eH,
        } = (function (e, t, n, l) {
            let [r, a] = i.useState(null),
                s = i.useRef(null),
                o = i.useCallback(() => {
                    (null != s.current && clearTimeout(s.current), (s.current = null));
                }, []);
            i.useEffect(() => o, [o]);
            let u = i.useMemo(
                    () => ({
                        ...l,
                        showConfirmation: (e) => {
                            (o(),
                                a(e),
                                (s.current = setTimeout(() => {
                                    ((s.current = null), a(null));
                                }, 1500)));
                        },
                    }),
                    [l, o],
                ),
                c = i.useMemo(() => ({ guildId: t, platform: u, busy: n }), [t, u, n]),
                d = (0, tT.Ay)(e, c),
                m = d?.publishing === !0;
            i.useEffect(() => {
                m && (o(), a(null));
            }, [m, o]);
            let f = m ? null : r;
            return {
                publishOptions: c,
                publish: d,
                publishing: m,
                confirmation: f,
                variant: ry(d) ? "secondary" : "primary",
                text:
                    null != f
                        ? f
                        : null == d
                          ? E.intl.string(S.default["120EFN"])
                          : ry(d) && !d.publishing
                            ? E.intl.string(S.default.kAfbEN)
                            : d.label,
            };
        })(I, m, L || T, rC),
        eV = rI(I, eU, eF),
        eW = (0, n0.A)(em),
        eY = "frame" === B && !et && (0, ra.x1)(em) && (eW.isPoppedOut || eW.canPopout),
        eZ =
            null == s
                ? null
                : (0, a.jsx)(tY, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: m,
                      projectGuildId: s.guild_id,
                      isOwner: (0, ek.PV)(s),
                      canRemix: (0, ek.H_)(s),
                      onRefresh: (0, ra.x1)(ef) ? eg : void 0,
                      isRefreshing: eh,
                      onTogglePreviewPaused: "frame" === B ? eR : void 0,
                      previewPaused: et,
                      previewPauseDisabled: !et && ew,
                      onTogglePopout: eY ? (eW.isPoppedOut ? eW.popIn : eW.popOut) : void 0,
                      poppedOut: eW.isPoppedOut,
                      onToggleDebug: b ? eM : void 0,
                      debugOpen: p,
                      onClose: e$,
                      onExport: eD.onExport,
                      onImport: eD.onImport,
                      onRemix: eO,
                      onConnectTool: w
                          ? () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void (0, tq.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([n.e("834460"), n.e("960521")]).then(
                                            n.bind(n, 699760),
                                        );
                                        return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                    })
                                );
                            }
                          : void 0,
                      onHistory: () => {
                          var e;
                          return (
                              (e = {
                                  projectId: s.id,
                                  installScope: s.install_scope,
                                  restoreDisabled: C?.status === "restoring",
                                  onRestoreVersion: (e, t) => A(e, t, !0),
                              }),
                              void (0, tq.openModalLazy)(async () => {
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
                          G.modes.includes("widget") && "unavailable-authorization-revoked" !== G.profileState
                              ? J
                              : null,
                      previewProjectId: s.id,
                  }),
        eJ =
            null == eU || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: g4.As,
                      onMouseDown:
                          null == I || eU.disabled || eG
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, rb.dx)(I);
                                },
                      children: (0, a.jsx)(eL.$, {
                          size: "sm",
                          variant: eK,
                          icon: eG ? g7 : null != eB ? nW.U : void 0,
                          text: eH,
                          onClick: () => eV("header"),
                      }),
                  }),
        eQ = null == s ? void 0 : () => (0, tR.A)(s.id, { guildId: m, isPreview: !0, publishOptions: eF }),
        e0 = (0, a.jsx)(_, {
            title: s?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: d },
            project: s,
            onOpenProjectSettings: eQ,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: g4.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: g4.QQ,
                                  children: [
                                      (0, a.jsx)(ru, {
                                          targets: el,
                                          target: (function (e, t) {
                                              let n =
                                                  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                              return null == e
                                                  ? null
                                                  : "frame" !== e
                                                    ? { mode: e }
                                                    : null == n
                                                      ? { mode: e, surface: t }
                                                      : { mode: e, surface: t, appChannel: n };
                                          })(B, H, X),
                                          onChange: er,
                                      }),
                                      ee
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === B
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: ea ? g9 : g8,
                                                              tooltip: ei,
                                                              "aria-label": ei,
                                                              selected: ea,
                                                              onClick: es,
                                                          })
                                                        : null,
                                                    ea && "frame" === B
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: pe,
                                                              tooltip: eu,
                                                              "aria-label": eu,
                                                              selected: eo,
                                                              onClick: ec,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(lT, {
                                                        enabled: eA && !eS && !ew && !et,
                                                        onLongPress: eE,
                                                        children: (0, a.jsx)(y.A.Icon, {
                                                            ref: ey,
                                                            icon: nX.x,
                                                            iconClassName: g4.D8,
                                                            tooltip: e_,
                                                            "aria-label": e_,
                                                            selected: eS || eb,
                                                            disabled: et || (ew && !eS),
                                                            onClick: eS ? eI : eC,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== B || et
                                          ? null
                                          : (0, a.jsx)(ri, { frame: em, controlProjectId: s.id }),
                                  ],
                              }),
                              (0, a.jsx)("div", { className: g4.YJ }),
                              (0, a.jsx)(lU.A, { frame: em }),
                              (0, a.jsx)(y.A.Icon, {
                                  icon: tw.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: eQ,
                              }),
                              eZ,
                              ep
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: g6, tooltip: ex, "aria-label": ex, onClick: ev }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(g4.nj, nB.T),
        children: [
            eD.importInput,
            (0, a.jsx)("main", {
                className: g4.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: g4.j5,
                              children: [
                                  e0,
                                  (0, a.jsxs)("div", {
                                      className: g4.sD,
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
                                          (0, a.jsx)(eL.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, R.hF)(m),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tT.bI.Provider, {
                              value: eF,
                              children: (0, a.jsx)(
                                  g3,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ey,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ed,
                                      frameLaunchParams: Z,
                                      header: e0,
                                      chatOpen: f,
                                      onCloseChat: ej,
                                      chatHeaderAction: eJ,
                                      debugOpen: b && p,
                                      onCloseDebug: eT,
                                      onRestoreVersion: A,
                                      onImportProject: (0, ek.PV)(s) ? eD.onImport : void 0,
                                      restoreState: C,
                                      previewReady: $,
                                      previewGate: eq,
                                      availability: G,
                                      activeMode: B,
                                      widgetApplicationId: J,
                                      overlayWidgetSize: Q,
                                      previewPaused: et,
                                      onResumePreview: eP,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function g7() {
    return (0, a.jsx)(nn.y, { type: nn.t.SPINNING_CIRCLE_SIMPLE, className: g4.Hv, itemClassName: g4.C5 });
}
function g6(e) {
    return (0, a.jsx)(nY.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function g8(e) {
    return (0, a.jsx)(nZ.u, { ...e, size: "custom", width: 20, height: 20 });
}
function g9(e) {
    return (0, a.jsx)(nJ.k, { ...e, size: "custom", width: 20, height: 20 });
}
function pe(e) {
    return (0, a.jsx)(nQ.H, { ...e, size: "custom", width: 20, height: 20 });
}
function pt(e) {
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
            (0, u.pX)(q.BVt.CHANNEL(t, z.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [ek.Ay],
            () => {
                if (null == s) return null;
                let e = ek.Ay.getProject(s);
                return null == e || (0, ek.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        g = (0, o.bG)([ek.Ay], () => ek.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(g5, { project: h, projectsLoaded: g, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nV, { guildId: t });
}
